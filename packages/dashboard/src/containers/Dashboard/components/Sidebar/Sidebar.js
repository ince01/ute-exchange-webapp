import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Menu, Scrollbar } from '@ute-exchange/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { actions } from 'redux/appReducer';
import appConfig from 'config/app.config';
import options from './options';
import SidebarWrapper from './Sidebar.styles';
import SidebarMenu from './SidebarMenu';

const { Sider } = Layout;

const { toggleOpenDrawer, changeOpenKeys, changeCurrent, toggleCollapsed } = actions;

const getAncestorKeys = key => {
  const map = {
    sub3: ['sub2'],
  };
  return map[key] || [];
};

function Sidebar() {
  const dispatch = useDispatch();
  const { view, openKeys, collapsed, openDrawer, current, height } = useSelector(state => state.app);

  const handleClick = useCallback(
    e => {
      dispatch(changeCurrent([e.key]));
      if (view === 'MobileView') {
        setTimeout(() => {
          dispatch(toggleCollapsed());
          dispatch(toggleOpenDrawer());
        }, 100);
      }
    },
    [view, dispatch],
  );

  const onOpenChange = useCallback(
    newOpenKeys => {
      const latestOpenKey = newOpenKeys.find(key => !(openKeys.indexOf(key) > -1));
      const latestCloseKey = openKeys.find(key => !(newOpenKeys.indexOf(key) > -1));
      let nextOpenKeys = [];
      if (latestOpenKey) {
        nextOpenKeys = getAncestorKeys(latestOpenKey).concat(latestOpenKey);
      }
      if (latestCloseKey) {
        nextOpenKeys = getAncestorKeys(latestCloseKey);
      }
      dispatch(changeOpenKeys(nextOpenKeys));
    },
    [openKeys, dispatch],
  );

  const onMouseEnter = useCallback(() => {
    if (collapsed && !openDrawer) {
      dispatch(toggleOpenDrawer());
    }
  }, [collapsed, openDrawer, dispatch]);

  const onMouseLeave = useCallback(() => {
    if (collapsed && openDrawer) {
      dispatch(toggleOpenDrawer());
    }
  }, [collapsed, openDrawer, dispatch]);

  const isCollapsed = collapsed && !openDrawer;

  const mode = isCollapsed ? 'vertical' : 'inline';

  const scrollHeight = height - 55;

  return (
    <SidebarWrapper>
      <Sider
        className="sidebar"
        width={220}
        trigger={null}
        collapsible
        collapsed={isCollapsed}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="logoWrapper">
          {isCollapsed ? (
            <h3>
              <Link to="/dashboard">
                <FontAwesomeIcon icon={faReact} />
              </Link>
            </h3>
          ) : (
            <h3>
              <Link to="/dashboard">{appConfig.appName}</Link>
            </h3>
          )}
        </div>
        <Scrollbar style={{ height: scrollHeight }}>
          <Menu
            onClick={handleClick}
            theme="dark"
            className="dashboardMenu"
            mode={mode}
            openKeys={isCollapsed ? [] : openKeys}
            selectedKeys={current}
            onOpenChange={onOpenChange}
          >
            {options.map(singleOption => (
              <SidebarMenu key={singleOption.key} singleOption={singleOption} />
            ))}
          </Menu>
        </Scrollbar>
      </Sider>
    </SidebarWrapper>
  );
}

export default Sidebar;
