import { IQueryParams } from 'shared/models/common.model';

const getPosts = (queryOptions?: IQueryParams) => ({
	type: 'GET_POSTS_START',
	payload: queryOptions,
});

export { getPosts };
