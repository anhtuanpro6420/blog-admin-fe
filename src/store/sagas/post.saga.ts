import { call, takeEvery } from 'redux-saga/effects';
import { Post } from 'shared/models/post.model';
import { GET_POSTS_START } from 'store/action-contstants/post.constant';
import axios from '../../axios-instance';

const getPosts = async (): Promise<Post> => {
	const { data } = await axios.get('/v1/posts');
	return data;
};

function* fetchPosts(action: any) {
	try {
		const posts: Array<Post> = yield call(getPosts);
		console.log(posts);
	} catch (err) {
		console.log(err);
	}
}

function* actionWatcher() {
	yield takeEvery(GET_POSTS_START, fetchPosts);
}

export default actionWatcher;
