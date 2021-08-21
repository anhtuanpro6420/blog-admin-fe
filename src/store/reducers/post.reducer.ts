import { IPost, IPostsResponse } from 'shared/models/post.model';
import {
    GET_POSTS_START,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
    DELETE_POST_START,
    DELETE_POST_SUCCESS,
    DELETE_POST_ERROR,
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
                data: [],
                metadata: {},
                isLoading: false,
                error: { message },
            };
        }

        default:
            return state;
    }
};

export default postReducer;
