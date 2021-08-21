import { IQueryParams } from 'shared/models/common.model';
import { IPostsResponse } from 'shared/models/post.model';
import {
    DELETE_POST_ERROR,
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    GET_POSTS_ERROR,
    GET_POSTS_START,
    GET_POSTS_SUCCESS,
} from 'store/action-contstants/post.constant';

// GET POSTS
const getPosts = (queryOptions?: IQueryParams) => ({
    type: GET_POSTS_START,
    payload: queryOptions,
});

const getPostsSuccess = (payload: IPostsResponse) => ({
    type: GET_POSTS_SUCCESS,
    payload,
});

const getPostsError = (payload: IPostsResponse) => ({
    type: GET_POSTS_ERROR,
    payload,
});

// DELETE POST
const deletePost = (postId: string) => ({
    type: DELETE_POST_START,
    payload: postId,
});

const deletePostSuccess = (payload: IPostsResponse) => ({
    type: DELETE_POST_SUCCESS,
    payload,
});

const deletePostError = (payload: IPostsResponse) => ({
    type: DELETE_POST_ERROR,
    payload,
});

export {
    getPosts,
    getPostsSuccess,
    getPostsError,
    deletePost,
    deletePostSuccess,
    deletePostError,
};
