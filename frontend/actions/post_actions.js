import * as PostAPIUtil from '../utils/api/post_api_util';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

export const receiveAllPosts = posts => {
    return {
        type: RECEIVE_ALL_POSTS,
        posts 
    }
};

export const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post 
    }
};

export const removePost = postId => {
    return {
        type: REMOVE_POST,
        postId 
    }
};

export const fetchPosts = (wallId) => dispatch => {
    return (PostAPIUtil.requestAllPosts(wallId)
        .then(posts => dispatch(receiveAllPosts(posts)))
    )
};

export const fetchPost = (postId) => dispatch => {
    return (PostAPIUtil.requestPost(postId)
        .then(post => dispatch(receivePost(post)))
    )
};

export const updatePost = (post) => dispatch => {
    return (PostAPIUtil.updatePost(post.id)
        .then(post => dispatch(receivePost(post)))
    )
};

export const deletePost = (postId) => dispatch => {
    return (PostAPIUtil.deletePost(postId)
        .then(postId => dispatch(removePost(postId)))
    )
}