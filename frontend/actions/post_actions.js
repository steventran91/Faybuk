import * as PostAPIUtil from '../util/post_api_util';
import { receiveErrors } from './session_actions';
import { getFriends } from '../reducers/friendship_selector';
import { getCommentIdsByPost } from '../reducers/comment_selector';
import { fetchCurrentUser } from './user_actions';

export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";
export const CLEAR_POSTS = "CLEAR_POSTS";

export const receiveAllPosts = data => {
    return {
        type: RECEIVE_ALL_POSTS,
        data 
    }
};

export const receivePost = post => {
    return {
        type: RECEIVE_POST,
        post 
    }
};

export const removePost = (post, comments) => {
    return {
        type: REMOVE_POST,
        post,
        comments
    }
};

export const clearPosts = () => {
    return {
        type: CLEAR_POSTS
    }
}

export const createPost = (post) => dispatch => {
    return (
        PostAPIUtil.createPost(post)
            .then(
                post => dispatch(receivePost(post)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const fetchPosts = (filter) => dispatch => {
    return (PostAPIUtil.requestAllPosts(filter)
        .then(
            posts => dispatch(receiveAllPosts(posts)),
            err => dispatch(receiveErrors(err))
        )
    )
};

export const fetchPost = (postId) => dispatch => {
    return (PostAPIUtil.requestPost(postId)
        .then(post => dispatch(receivePost(post)))
    )
};

export const updatePost = (post) => dispatch => {
    return (PostAPIUtil.updatePost(post)
        .then(
            post => dispatch(receivePost(post)),
            err => dispatch(receiveErrors(err))
        )
    )
};

export const deletePost = (postId) => (dispatch, getState) => {
    return (PostAPIUtil.deletePost(postId)
        .then(
            post => dispatch(removePost(post, getCommentIdsByPost(getState().entities.comments, post.id))),
            err => dispatch(receiveErrors(err))
        )
    )
}

export const fetchCurrentUserFeed = () => (dispatch, getState) => {
    dispatch(fetchCurrentUser())
    return fetchPosts({userId: getState().session.currentUser})(dispatch);
}