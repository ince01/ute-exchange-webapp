import React, { createElement, useCallback, useMemo, memo } from 'react';
import styled from 'styled-components';
import { Layout } from '@ute-exchange/components';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from 'redux/appReducer';
import TopbarWrapper from './Topbar.styles';
import TopbarUser from './TopbarUser';

const { toggleCollapsed } = actions;

const Header = styled(Layout.Header)`
  background: #ffffff;
  position: fixed;
  width: 100%;
  height: 55px;
`;

function Topbar() {
  const dispatch = useDispatch();

  const collapsed = useSelector(state => state.app.collapsed);

  const openDrawer = useSelector(state => state.app.openDrawer);

  const handleToggle = useCallback(() => dispatch(toggleCollapsed()), [dispatch]);

  const isCollapsed = useMemo(() => collapsed && !openDrawer, [collapsed, openDrawer]);

  return (
    <TopbarWrapper>
      <Header className={isCollapsed ? 'topbar collapsed' : 'topbar'}>
        <div className="left">
          {createElement(isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'triggerBtn',
            onClick: handleToggle,
          })}
        </div>
        <ul className="right">
          <li className="topbarUser">
            <TopbarUser />
          </li>
        </ul>
      </Header>
    </TopbarWrapper>
  );
}

export default memo(Topbar);
