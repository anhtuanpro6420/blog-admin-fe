import qs from 'query-string';
import { IMetadata } from 'shared/models/common.model';
import { IPost, IPostsResponse } from 'shared/models/post.model';
import axios from '../../axios-instance';

const getPosts = async (options: IMetadata): Promise<IPostsResponse> => {
    const queryString = qs.stringify(options);
    const { data } = await axios.get(`/v1/posts?${queryString}`);
    return data;
};

const deletePost = async (postId: string): Promise<IPost> => {
    const { data } = await axios.delete(`/v1/posts/${postId}`);
    return data;
};

const updatePost = async (post: IPost): Promise<IPost> => {
    const { _id: postId } = post || {};
    const { data } = await axios.patch(`/v1/posts/${postId}`, post);
    return data;
};

export default { getPosts, deletePost, updatePost };
