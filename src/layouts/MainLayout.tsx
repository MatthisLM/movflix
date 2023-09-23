import { Layout } from 'antd';
import { FC } from 'react';
import Header from '../components/Header';

interface Props {
    children: React.ReactNode;
  }

const MainLayout: FC<Props> = ({ children }) => (
        <Layout id="main-layout">
            <Header />
            <Layout>
                <Layout.Content id="main-content">{children}</Layout.Content>
            </Layout>
        </Layout>
);

export default MainLayout;
