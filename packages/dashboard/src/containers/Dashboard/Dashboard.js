import React, { useCallback, useState } from 'react';
import { Layout, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;

function Dashboard() {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = useCallback(() => {
    setCollapsed(preState => !preState);
  }, []);

  return (
    <Layout hasSider style={{ height: '100vh' }}>
      <Sider trigger={null} breakpoint="md" collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <UserOutlined />
            <span>nav 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <UserOutlined />
            <span>nav 2</span>
          </Menu.Item>
          <Menu.Item key="3">
            <UserOutlined />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: '0 16px' }}>
          {collapsed ? (
            <MenuUnfoldOutlined style={{ fontSize: '18px', color: '#08c' }} onClick={toggle} />
          ) : (
            <MenuFoldOutlined style={{ fontSize: '18px', color: '#08c' }} onClick={toggle} />
          )}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280,
          }}
        >
          Content
        </Content>
      </Layout>
    </Layout>
  );
}

export default Dashboard;
