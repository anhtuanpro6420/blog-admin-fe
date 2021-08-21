import { IQueryParams } from 'shared/models/common.model';
import { IPost, IPostsResponse } from 'shared/models/post.model';
import {
    CREATE_POST_ERROR,
    CREATE_POST_START,
    CREATE_POST_SUCCESS,
    DELETE_POST_ERROR,
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    GET_POSTS_ERROR,
    GET_POSTS_START,
    GET_POSTS_SUCCESS,
    UPDATE_POST_ERROR,
    UPDATE_POST_START,
    UPDATE_POST_SUCCESS,
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

// UPDATE POST
const updatePost = (payload: IPost) => ({
    type: UPDATE_POST_START,
    payload,
});

const updatePostSuccess = (payload: IPost) => ({
    type: UPDATE_POST_SUCCESS,
    payload,
});

const updatePostError = (payload: IPost) => ({
    type: UPDATE_POST_ERROR,
    payload,
});

// CREATE POST
const createPost = (payload: IPost) => ({
    type: CREATE_POST_START,
    payload,
});

const createPostSuccess = (payload: IPost) => ({
    type: CREATE_POST_SUCCESS,
    payload,
});

const createPostError = (payload: IPost) => ({
    type: CREATE_POST_ERROR,
    payload,
});

export {
    getPosts,
    getPostsSuccess,
    getPostsError,
    deletePost,
    deletePostSuccess,
    deletePostError,
    updatePost,
    updatePostSuccess,
    updatePostError,
    createPost,
    createPostSuccess,
    createPostError,
};
