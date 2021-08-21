import { IPost, IPostsResponse } from 'shared/models/post.model';
import {
    GET_POSTS_START,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_POST_ERROR,
    UPDATE_POST_START,
    UPDATE_POST_SUCCESS,
    UPDATE_POST_ERROR,
    CREATE_POST_START,
    CREATE_POST_SUCCESS,
    CREATE_POST_ERROR,
} from '../action-contstants/post.constant';
import postSvc from '../services/post.service';

const INITIAL_STATE: IPostsResponse = {
    data: [],
    metadata: {},
    isLoading: false,
    error: null,
};

const postReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case GET_POSTS_START: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case GET_POSTS_SUCCESS: {
            const { data, metadata } = action.payload || {};
            return {
                ...state,
                data,
                metadata,
                isLoading: false,
                error: null,
            };
        }
        case GET_POSTS_ERROR: {
            const { message } = action.payload || {};
            return {
                ...state,
                data: [],
                metadata: {},
                isLoading: false,
                error: { message },
            };
        }
        case DELETE_POST_START: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case DELETE_POST_SUCCESS: {
            const deletedPost = action.payload;
            const { _id: deletedPostId } = deletedPost || {};
            const newPosts: Array<IPost> = postSvc.deletePost(
                deletedPostId,
                state.data
            );
            return {
                ...state,
                data: newPosts,
                isLoading: false,
                error: null,
            };
        }
        case DELETE_POST_ERROR: {
            const { message } = action.payload || {};
            return {
                ...state,
                isLoading: false,
                error: { message },
            };
        }
        case UPDATE_POST_START: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case UPDATE_POST_SUCCESS: {
            const updatedPost = action.payload;
            const newPosts: Array<IPost> = postSvc.updatePost(
                updatedPost,
                state.data
            );
            return {
                ...state,
                data: newPosts,
                isLoading: false,
                error: null,
            };
        }
        case UPDATE_POST_ERROR: {
            const { message } = action.payload || {};
            return {
                ...state,
                isLoading: false,
                error: { message },
            };
        }
        case CREATE_POST_START: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case CREATE_POST_SUCCESS: {
            const createdPost = action.payload;
            const newPosts: Array<IPost> = postSvc.createPost(
                createdPost,
                state.data
            );
            return {
                ...state,
                data: newPosts,
                isLoading: false,
                error: null,
            };
        }
        case CREATE_POST_ERROR: {
            const { message } = action.payload || {};
            return {
                ...state,
                isLoading: false,
                error: { message },
            };
        }
        default:
            return state;
    }
};

export default postReducer;
