import { IMetadata } from './common.model';
import { ITag } from './tag.model';

export interface IPost {
    _id: string;
    title: string;
    content: string;
    tags: Array<ITag>;
}

export interface IPostsResponse {
    data: Array<IPost>;
    metadata: IMetadata;
    isLoading: boolean;
    error: any;
}
