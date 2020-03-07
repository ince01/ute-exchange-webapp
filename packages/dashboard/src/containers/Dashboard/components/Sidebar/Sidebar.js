import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import clone from 'clone';
import { Layout, Menu } from 'antd';
import Scrollbar from '@ute-exchange/components/ScrollBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { actions } from '../../../../redux/appReducer';
import options from './options';
import SidebarWrapper from './Sidebar.styles';
import SidebarMenu from './SidebarMenu';
import appConfig from '../../../../config/app.config';

const { Sider } = Layout;
const { toggleOpenDrawer, changeOpenKeys, changeCurrent, toggleCollapsed } = actions;

export default function Sidebar() {
  const dispatch = useDispatch();
  const { view, openKeys, collapsed, openDrawer, current, height } = useSelector(state => state.app);

  function handleClick(e) {
    dispatch(changeCurrent([e.key]));
    if (view === 'MobileView') {
      setTimeout(() => {
        dispatch(toggleCollapsed());
        dispatch(toggleOpenDrawer());
      }, 100);
    }
  }
  function onOpenChange(newOpenKeys) {
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
  }

  const getAncestorKeys = key => {
    const map = {
      sub3: ['sub2'],
    };
    return map[key] || [];
  };

  const isCollapsed = clone(collapsed) && !clone(openDrawer);

  const mode = isCollapsed === true ? 'vertical' : 'inline';
  const onMouseEnter = event => {
    if (collapsed && openDrawer === false) {
      dispatch(toggleOpenDrawer());
    }
  };

  const onMouseLeave = () => {
    if (collapsed && openDrawer === true) {
      dispatch(toggleOpenDrawer());
    }
  };

  return (
    <SidebarWrapper>
      <Sider
        trigger={null}
        collapsible
        collapsed={isCollapsed}
        width={240}
        className="isomorphicSidebar"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div className="isoLogoWrapper">
          {isCollapsed ? (
            <div>
              <h3>
                <Link to="/dashboard">
                  <FontAwesomeIcon icon={faReact} />
                </Link>
              </h3>
            </div>
          ) : (
            <h3>
              <Link to="/dashboard">{appConfig.appName}</Link>
            </h3>
          )}
        </div>
        <Scrollbar style={{ height: height - 70 }}>
          <Menu
            onClick={handleClick}
            theme="dark"
            className="isoDashboardMenu"
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
