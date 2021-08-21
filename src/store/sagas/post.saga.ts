import { call, put, takeEvery } from 'redux-saga/effects';
import { IPostsResponse } from 'shared/models/post.model';
import {
    DELETE_POST_START,
    GET_POSTS_START,
} from 'store/action-contstants/post.constant';
import {
    deletePostError,
    deletePostSuccess,
    getPostsError,
    getPostsSuccess,
} from 'store/actions/post.action';
import postApi from '../../shared/apis/post.api';

function* fetchPosts(action: any) {
    try {
        const result: IPostsResponse = yield call(
            postApi.getPosts,
            action.payload
        );
        yield put(getPostsSuccess(result));
    } catch (err) {
        yield put(getPostsError(err));
    }
}

function* deletePost(action: any) {
    try {
        const result: IPostsResponse = yield call(
            postApi.deletePost,
            action.payload
        );
        yield put(deletePostSuccess(result));
    } catch (err) {
        yield put(deletePostError(err));
    }
}

function* actionWatcher() {
    yield takeEvery(GET_POSTS_START, fetchPosts);
    yield takeEvery(DELETE_POST_START, deletePost);
}

export default actionWatcher;
