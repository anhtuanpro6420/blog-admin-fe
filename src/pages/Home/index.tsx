import React, { FC, useEffect, useState } from 'react';
import { Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ITag } from 'shared/models/tag.model';
import { Post } from 'shared/models/post.model';
import { getPosts } from '../../store/actions/post.action';
import RootState from '../../shared/models/root-state.model';

const Home: FC = () => {
    const posts = useSelector((state: RootState) => state.post.data);
    const metadata = useSelector((state: RootState) => state.post.metadata);
    const { total = 0 } = metadata || {};
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);

    const renderTags = (tags: Array<ITag>) => {
        return tags.map(tag => {
            return <Tag key={tag._id}>{tag.name.toUpperCase()}</Tag>;
        });
    };

    const handleEdit = (post: Post) => {
        console.log(post);
    };

    const handleDelete = (post: Post) => {
        console.log(post);
    };

    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
            sorter: true,
            width: '20%',
        },
        {
            title: 'Content',
            dataIndex: 'content',
            width: '20%',
        },
        {
            title: 'Tags',
            dataIndex: 'tags',
            render: (tags: Array<ITag>) => renderTags(tags),
        },
        {
            title: 'Action',
            key: 'action',
            render: (text: string, post: Post) => (
                <Space size='middle'>
                    <EditOutlined onClick={() => handleEdit(post)} />
                    <DeleteOutlined onClick={() => handleDelete(post)} />
                </Space>
            ),
        },
    ];

    useEffect(() => {
        const queryOptions = {
            page,
            limit,
        };
        dispatch(getPosts(queryOptions));
    }, [page, limit]);

    const handleTableChange = (pagination: any, filters: any, sorter: any) => {
        const { current: currentPage = 1, pageSize = 10 } = pagination || {};
        setPage(currentPage);
        setLimit(pageSize);
    };

    return (
        <div className='home-page'>
            <Table
                rowKey='_id'
                columns={columns}
                dataSource={posts}
                pagination={{
                    total,
                    defaultPageSize: 10,
                    showSizeChanger: true,
                    pageSizeOptions: ['10', '20', '30'],
                }}
                onChange={handleTableChange}
            />
        </div>
    );
};

export default Home;
