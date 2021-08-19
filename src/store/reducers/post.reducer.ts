import {
	GET_POSTS_START,
	GET_POSTS_SUCCESS,
	GET_POSTS_ERROR,
} from '../action-contstants/post.constant';

const INITIAL_STATE = {
	data: [],
	isLoading: false,
	error: null,
};

const postReducer = (state = INITIAL_STATE, action: any) => {
	switch (action.type) {
		case GET_POSTS_START:
			return {
				...state,
				isLoading: true,
			};
		case GET_POSTS_SUCCESS:
			return {
				...state,
				data: action.payload,
				isLoading: false,
			};
		case GET_POSTS_ERROR:
			return {
				...state,
				data: null,
				isLoading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default postReducer;
