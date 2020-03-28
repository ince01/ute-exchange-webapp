import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout } from 'antd';
import useWindowSize from '@ute-exchange/hooks/useWindowSize';
import { actions } from 'redux/appReducer';
import appConfig from 'config/app.config';

import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
// import DashboardRoutes from './DashboardRoutes';

import { DashboardContainer, DashboardGlobalStyles } from './Dashboard.styles';

const { toggleAll } = actions;
const { Content, Footer } = Layout;
const styles = {
  layout: { flexDirection: 'row', overflowX: 'hidden' },
  content: {
    padding: '70px 0 0',
    flexShrink: '0',
    background: '#f1f3f6',
    position: 'relative',
  },
  footer: {
    background: '#ffffff',
    textAlign: 'center',
    borderTop: '1px solid #ededed',
  },
};

function Dashboard() {
  const dispatch = useDispatch();
  const appHeight = useSelector(state => state.app.height);

  const { width, height } = useWindowSize();

  React.useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [width, height, dispatch]);

  return (
    <DashboardContainer>
      <DashboardGlobalStyles />
      <Layout style={{ height }}>
        <Topbar />
        <Layout style={styles.layout}>
          <Sidebar />
          <Layout className="contentMainLayout" style={{ height: appHeight }}>
            <Content style={styles.content}>
              {/* <DashboardRoutes /> */}
              <h1>Content</h1>
            </Content>
            <Footer style={styles.footer}>{appConfig.footerText}</Footer>
          </Layout>
        </Layout>
      </Layout>
    </DashboardContainer>
  );
}

export default Dashboard;
