import { call, put, takeEvery } from 'redux-saga/effects';
import { IAction } from 'shared/models/common.model';
import { IPost, IPostsResponse } from 'shared/models/post.model';
import {
    CREATE_POST_START,
    DELETE_POST_START,
    GET_POSTS_START,
    UPDATE_POST_START,
} from 'store/action-contstants/post.constant';
import {
    deletePostError,
    deletePostSuccess,
    getPostsError,
    getPostsSuccess,
    updatePostSuccess,
    updatePostError,
    createPostSuccess,
    createPostError,
} from 'store/actions/post.action';
import postApi from '../../shared/apis/post.api';

function* fetchPosts(action: IAction) {
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

function* deletePost(action: IAction) {
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

function* updatePost(action: IAction) {
    try {
        const result: IPost = yield call(postApi.updatePost, action.payload);
        yield put(updatePostSuccess(result));
    } catch (err) {
        yield put(updatePostError(err));
    }
}

function* createPost(action: IAction) {
    try {
        console.log(action.payload);
        const result: IPost = yield call(postApi.createPost, action.payload);
        yield put(createPostSuccess(result));
    } catch (err) {
        yield put(createPostError(err));
    }
}

function* actionWatcher() {
    yield takeEvery(GET_POSTS_START, fetchPosts);
    yield takeEvery(DELETE_POST_START, deletePost);
    yield takeEvery(UPDATE_POST_START, updatePost);
    yield takeEvery(CREATE_POST_START, createPost);
}

export default actionWatcher;
