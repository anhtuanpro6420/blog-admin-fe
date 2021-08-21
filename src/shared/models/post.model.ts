import { IMetadata } from './common.model';
import { ITag } from './tag.model';

export interface Post {
	title: string;
	content: string;
	tags: Array<ITag>;
}

export interface IPostsResponse {
	data: Array<Post>;
	metadata: IMetadata;
	isLoading: boolean;
	error: any;
}
