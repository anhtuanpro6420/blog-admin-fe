import React, { FC, useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from '../../axios-instance';

const columns = [
	{
		title: 'Name',
		dataIndex: 'name',
		sorter: true,
		// render: (name: string) => `${name.first} ${name.last}`,
		width: '20%',
	},
	{
		title: 'Gender',
		dataIndex: 'gender',
		filters: [
			{ text: 'Male', value: 'male' },
			{ text: 'Female', value: 'female' },
		],
		width: '20%',
	},
	{
		title: 'Email',
		dataIndex: 'email',
	},
];

const getRandomuserParams = (params: any) => ({
	results: params.pagination.pageSize,
	page: params.pagination.current,
	...params,
});

const Home: FC = () => {
	const [posts, setPosts] = useState([]);
	const [curPage, setCurPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [isLoading, setIsLoading] = useState(false);

	const getPosts = async () => {
		const {
			data: { data: result },
		} = await axios.get('/api/v1/posts');
		setPosts(result);
		return result;
	};

	useEffect(() => {
		getPosts();
	}, []);

	return <div>Home</div>;
};

export default Home;
