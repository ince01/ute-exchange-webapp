import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from '@ute-exchange/components';
import { useWindowSize } from '@ute-exchange/hooks';
import { actions } from 'redux/appReducer';
import appConfig from 'config/app.config';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { DashboardContainer } from './Dashboard.styles';
// import DashboardRoutes from './DashboardRoutes';

const { toggleAll } = actions;
const { Content, Footer } = Layout;

const styles = {
  layout: { flexDirection: 'row', overflowX: 'hidden' },
  content: {
    padding: '55px 0 0',
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

  const { width, height } = useWindowSize();

  useEffect(() => {
    dispatch(toggleAll(width, height));
  }, [width, height, dispatch]);

  return (
    <DashboardContainer>
      <Layout style={{ height }}>
        <Topbar />
        <Layout style={styles.layout}>
          <Sidebar />
          <Layout className="contentMainLayout" style={{ height }}>
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
