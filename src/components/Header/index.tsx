import React, { FC } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header: HeaderAnt } = Layout;

const Header: FC = () => {
	return (
		<HeaderAnt className='header'>
			<div className='logo' />
			<Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']}>
				<Menu.Item key='1'>
					<Link to='/home'>Home</Link>
				</Menu.Item>
				<Menu.Item key='2'>nav 2</Menu.Item>
				<Menu.Item key='3'>nav 3</Menu.Item>
			</Menu>
		</HeaderAnt>
	);
};

export default Header;
