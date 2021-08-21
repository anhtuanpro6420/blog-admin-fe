import React, { FC, useEffect, useState } from 'react';
import { Button, Modal, Space, Table, Tag } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { ITag } from 'shared/models/tag.model';
import { IPost } from 'shared/models/post.model';
import {
    getPosts,
    deletePost,
    createPost,
} from '../../store/actions/post.action';
import RootState from '../../shared/models/root-state.model';
import CreatingForm from './CreatingForm';

const Home: FC = () => {
    const posts = useSelector((state: RootState) => state.post.data);
    const metadata = useSelector((state: RootState) => state.post.metadata);
    const { total = 0 } = metadata || {};
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(10);
    const [isModalVisible, setIsModalVisible] = useState(false);

    const renderTags = (tags: Array<ITag>) => {
        return tags.map(tag => {
            return <Tag key={tag._id}>{tag.name.toUpperCase()}</Tag>;
        });
    };

    const handleEdit = (post: IPost) => {
        console.log(post);
        setIsModalVisible(true);
    };

    const handleDelete = (post: IPost) => {
        const { _id: postId } = post || {};
        dispatch(deletePost(postId));
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
            render: (text: string, post: IPost) => (
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

    useEffect(() => {
        setIsModalVisible(false);
    }, [posts]);

    const handleTableChange = (pagination: any, filters: any, sorter: any) => {
        const { current: currentPage = 1, pageSize = 10 } = pagination || {};
        setPage(currentPage);
        setLimit(pageSize);
    };

    const handleNewPostClicked = () => {
        setIsModalVisible(true);
    };

    const handleCreatingPost = (post: IPost) => {
        console.log(post);
        // setIsModalVisible(false);
        dispatch(createPost(post));
    };

    const handleCreatingPostFailed = (error: any) => {
        console.log(error);
    };

    return (
        <div className='home-page'>
            <Button onClick={handleNewPostClicked}>New Post</Button>
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
            <Modal title='New post' visible={isModalVisible} footer={null}>
                <CreatingForm
                    onFinish={handleCreatingPost}
                    onFinishFailed={handleCreatingPostFailed}
                />
            </Modal>
        </div>
    );
};

export default Home;
