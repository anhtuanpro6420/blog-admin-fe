import { IQueryParams } from 'shared/models/common.model';
import { IPostsResponse } from 'shared/models/post.model';

const getPosts = (queryOptions?: IQueryParams) => ({
    type: 'GET_POSTS_START',
    payload: queryOptions,
});

const getPostsSuccess = (payload: IPostsResponse) => ({
    type: 'GET_POSTS_SUCCESS',
    payload,
});

const getPostsError = (payload: IPostsResponse) => ({
    type: 'GET_POSTS_ERROR',
    payload,
});

export { getPosts, getPostsSuccess, getPostsError };
