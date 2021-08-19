import React, { FC, useEffect, useState } from 'react';
import { Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import axios from '../../axios-instance';
import { getPosts } from '../../store/actions/post.action';
import RootState from '../../shared/models/root-state.model';

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
	const postsState = useSelector((state: RootState) => state.post);
	const dispatch = useDispatch();

	const [posts, setPosts] = useState([]);
	const [page, setPage] = useState(1);
	const [limit, setLimit] = useState(10);
	const [isLoading, setIsLoading] = useState(false);

	console.log(postsState);

	useEffect(() => {
		const queryOptions = {
			page,
			limit,
		};
		dispatch(getPosts(queryOptions));
	}, []);

	return <div>Home</div>;
};

export default Home;
