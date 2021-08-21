import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { IPost } from 'shared/models/post.model';

interface Props {
    onFinish: any;
    onFinishFailed: any;
    post?: IPost;
}

const PostForm: FC<Props> = ({ onFinish, onFinishFailed, post = null }) => {
    const initValues = () => {
        if (!post) {
            return {};
        }
        const { title, content } = post || {};
        return { title, content };
    };
    return (
        <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={initValues()}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label='Title'
                name='title'
                rules={[
                    { required: true, message: "Please input post's title!" },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label='Content'
                name='content'
                rules={[
                    { required: true, message: "Please input post's content!" },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default PostForm;
