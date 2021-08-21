import { IPost } from 'shared/models/post.model';

const deletePost = (deletedId: string, posts: Array<IPost> = []) => {
    const clonePosts: Array<IPost> = [...posts];
    const postIndex = clonePosts.findIndex(post => post._id === deletedId);
    if (postIndex > -1) {
        clonePosts.splice(postIndex, 1);
    }
    return clonePosts;
};

const updatePost = (updatedPost: IPost, posts: Array<IPost> = []) => {
    const clonePosts: Array<IPost> = [...posts];
    const postIndex = clonePosts.findIndex(
        post => post._id === updatedPost._id
    );
    if (postIndex > -1) {
        clonePosts[postIndex] = { ...updatedPost };
    }
    return clonePosts;
};

const createPost = (newPost: IPost, posts: Array<IPost> = []) => {
    const clonePosts: Array<IPost> = [...posts];
    return [{ ...newPost }, ...clonePosts];
};

export default { deletePost, updatePost, createPost };
