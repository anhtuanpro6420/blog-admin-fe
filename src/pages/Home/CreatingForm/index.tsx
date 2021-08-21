import React, { FC } from 'react';
import { Button, Form, Input } from 'antd';

interface Props {
    onFinish: any;
    onFinishFailed: any;
}

const CreatingForm: FC<Props> = ({ onFinish, onFinishFailed }) => {
    return (
        <Form
            name='basic'
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            initialValues={{ remember: true }}
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

export default CreatingForm;
