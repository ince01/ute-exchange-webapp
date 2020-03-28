import React from 'react';
import { Layout } from 'antd';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'redux/appReducer';
// import TopbarNotification from './TopbarNotification';
// import TopbarMessage from './TopbarMessage';
// import TopbarSearch from './TopbarSearch';
// import TopbarUser from './TopbarUser';
// import TopbarAddtoCart from './TopbarAddToCart';
import TopbarWrapper from './Topbar.styles';

const { Header } = Layout;
const { toggleCollapsed } = actions;
const styling = {
  background: '#ffffff',
  position: 'fixed',
  width: '100%',
  height: 70,
};

export default function Topbar() {
  const dispatch = useDispatch();
  const { collapsed, openDrawer } = useSelector(state => state.app);

  const handleToggle = React.useCallback(() => dispatch(toggleCollapsed()), [dispatch]);

  const isCollapsed = React.useMemo(() => collapsed && !openDrawer, [collapsed, openDrawer]);

  return (
    <TopbarWrapper>
      <Header style={styling} className={isCollapsed ? 'topbar collapsed' : 'topbar'}>
        <div className="isoLeft">
          {React.createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: handleToggle,
          })}
        </div>
        <ul className="isoRight">
          {/* <li className="isoSearch">
            <TopbarSearch />
          </li>
          <li className="isoNotify">
            <TopbarNotification />
          </li>
          <li className="isoMsg">
            <TopbarMessage />
          </li>
          <li className="isoCart">
            <TopbarAddtoCart />
          </li>
          <li className="isoUser">
            <TopbarUser />
          </li> */}
        </ul>
      </Header>
    </TopbarWrapper>
  );
}
