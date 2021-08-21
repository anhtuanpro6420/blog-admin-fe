import { IPostsResponse } from 'shared/models/post.model';
import {
    GET_POSTS_START,
    GET_POSTS_SUCCESS,
    GET_POSTS_ERROR,
} from '../action-contstants/post.constant';

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
        default:
            return state;
    }
};

export default postReducer;
