import { IPost } from 'shared/models/post.model';

const deletePost = (deletedId: string, posts: Array<IPost> = []) => {
    const deletedPosts: Array<IPost> = [...posts];
    const postIndex = deletedPosts.findIndex(post => post._id === deletedId);
    if (postIndex > -1) {
        deletedPosts.splice(postIndex, 1);
    }
    return deletedPosts;
};

export default { deletePost };
