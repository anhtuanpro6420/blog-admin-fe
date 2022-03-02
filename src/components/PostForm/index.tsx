import React, { FC, useState } from 'react';
import { Button, Form, Input } from 'antd';
import { Editor } from '@tinymce/tinymce-react';
import { IPost } from 'shared/models/post.model';

interface Props {
    onFinish: any;
    onFinishFailed: any;
    post?: IPost;
}

const PostForm: FC<Props> = ({ onFinish, onFinishFailed, post = null }) => {
    const [contentState, setContentState] = useState('');
    const [form] = Form.useForm();

    const getInitTitle = () => {
        if (!post) {
            return '';
        }
        const { title } = post || {};
        return title;
    };

    const getInitContent = () => {
        if (!post) {
            return '';
        }
        const { content } = post || {};
        return content;
    };

    const handleEditorChange = (e: any) => {
        const htmlContent = e.target.getContent() || '';
        setContentState(htmlContent);
    };

    const handleSubmit = ({ title }: { title: string }) => {
        const formValues = {
            title,
            content: contentState || getInitContent(),
        };
        onFinish(formValues);
    };

    return (
        <Form
            form={form}
            name='basic'
            initialValues={{ title: getInitTitle() }}
            onFinish={handleSubmit}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label='Title'
                name='title'
                rules={[
                    {
                        required: true,
                        message: "Please input post's title!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Editor
                onChange={handleEditorChange}
                initialValue={getInitContent()}
                init={{
                    menubar: 'file edit insert view format table tools help',
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount',
                    ],
                    toolbar:
                        'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                }}
            />
            <Form.Item>
                <Button type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};

export default PostForm;
