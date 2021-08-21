import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;
const { Sider } = Layout;

const SideNav: FC = () => {
    return (
        <Sider width={200} className='site-layout-background'>
            <Menu
                mode='inline'
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
                style={{ height: '100%', borderRight: 0 }}
            >
                <SubMenu key='sub1' icon={<UserOutlined />} title='Post'>
                    <Menu.Item key='1'>List</Menu.Item>
                </SubMenu>
                <SubMenu key='sub2' icon={<LaptopOutlined />} title='Tag'>
                    <Menu.Item key='5'>option5</Menu.Item>
                    <Menu.Item key='6'>option6</Menu.Item>
                    <Menu.Item key='7'>option7</Menu.Item>
                    <Menu.Item key='8'>option8</Menu.Item>
                </SubMenu>
            </Menu>
        </Sider>
    );
};

export default SideNav;
