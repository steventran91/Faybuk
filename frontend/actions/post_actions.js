import * as PostAPIUtil from '../util/post_api_util';
import { receiveErrors } from './session/session_actions';
import { getFriends } from '../reducers/selectors/friendship_selectors';
import { getCommentIdsByPost } from '../reducers/selectors/comment_selectors';
import { getCurrentUser } from './user_actions';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const DELETE_POST = "DELETE_POST";
export const CLEAR_POSTS = "CLEAR_POSTS";

export const receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    post
  };
};


export const receiveAllPosts = (data) => {
    return {
        type: RECEIVE_ALL_POSTS,
        data 
    }
};


export const deletePostObj = (post, comments) => {
    return {
        type: DELETE_POST,
        post,
        comments
    }
};

export const clearPosts = () => {
    return {
        type: CLEAR_POSTS
    }
}

export const publishPost = (post) => (dispatch) => {
    return (
        PostAPIUtil.publishPost(post)
            .then(
                post => dispatch(receivePost(post)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const getPosts = (filter) => (dispatch) => {
    return (PostAPIUtil.getPosts(filter)
        .then(
            posts => dispatch(receiveAllPosts(posts)),
            err => dispatch(receiveErrors(err))
        )
    )
};

// export const fetchPost = (postId) => dispatch => {
//     return (PostAPIUtil.requestPost(postId)
//         .then(post => dispatch(receivePost(post)))
//     )
// };

export const editPost = (post) => dispatch => {
    return (PostAPIUtil.editPost(post)
        .then(
            post => dispatch(receivePost(post)),
            err => dispatch(receiveErrors(err))
        )
    )
};

export const deletePost = (postId) => (dispatch, getState) => {
    return (PostAPIUtil.deletePost(postId)
        .then(
            post => dispatch(deletePostObj(post, getCommentIdsByPost(getState().entities.comments, post.id))),
            err => dispatch(receiveErrors(err))
        )
    )
}

export const getCurrentUserFeed = () => (dispatch, getState) => {
    dispatch(getCurrentUser())
    return getPosts({userId: getState().session.currentUser})(dispatch);
}