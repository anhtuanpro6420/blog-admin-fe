import qs from 'query-string';
import { call, put, takeEvery } from 'redux-saga/effects';
import { IMetadata } from 'shared/models/common.model';
import { IPostsResponse } from 'shared/models/post.model';
import { GET_POSTS_START } from 'store/action-contstants/post.constant';
import { getPostsError, getPostsSuccess } from 'store/actions/post.action';
import axios from '../../axios-instance';

const getPosts = async (options: IMetadata): Promise<IPostsResponse> => {
    const queryString = qs.stringify(options);
    const { data } = await axios.get(`/v1/posts?${queryString}`);
    return data;
};

function* fetchPosts(action: any) {
    try {
        const result: IPostsResponse = yield call(getPosts, action.payload);
        yield put(getPostsSuccess(result));
    } catch (err) {
        yield put(getPostsError(err));
    }
}

function* actionWatcher() {
    yield takeEvery(GET_POSTS_START, fetchPosts);
}

export default actionWatcher;
