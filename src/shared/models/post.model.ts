import { Tag } from './tag.model';

export interface Post {
	title: string;
	content: string;
	tags: Array<Tag>;
}
