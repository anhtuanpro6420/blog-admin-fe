import React, { FC } from 'react';
import { Layout } from 'antd';
import Header from 'components/Header';
import SideNav from 'components/SideNav';

const { Content } = Layout;

interface Props {
    children: JSX.Element;
}

const Wrapper: FC<Props> = ({ children }) => {
    return (
        <Layout>
            <Header />
            <Layout>
                <SideNav />
                <Layout>
                    <Content
                        className='site-layout-background'
                        style={{
                            padding: 24,
                            margin: 0,
                            minHeight: '90vh',
                        }}
                    >
                        {children}
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default Wrapper;
