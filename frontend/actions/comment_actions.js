import * as CommentAPIUtil from '../utils/api/comment_api_utils';
import { receiveErrors } from './session_actions';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";



export const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT, 
        comment 
    }
};

export const removeComment = comment => {
    return {
        type: REMOVE_COMMENT,
        comment
    }
};

export const fetchComments = () => dispatch => {
    return(CommentAPIUtil.requestAllComments()
        .then(comments => dispatch(receiveAllComments(comments)))
    )
}

export const fetchComment = (commentId) => dispatch => {
    return(CommentAPIUtil.requestComment(commentId)
        .then(comment => dispatch(receiveComment(comment)))
    )
}

export const createComment = (comment) => dispatch => {
    return(CommentAPIUtil.createComment(comment)
        .then(
            comment => dispatch(receiveComment(comment)),
            err => dispatch(receiveErrors(err))
        )
    )
}

export const updateComment = (comment) => dispatch => {
    return(CommentAPIUtil.updateComment(comment)
        .then(
            comment => dispatch(receiveComment(comment)),
            err => dispatch(receiveErrors(err))
        )
    )
}

export const deleteComment = (commentId) => dispatch => {
    return(CommentAPIUtil.deleteComment(commentId)
        .then(
            comment => dispatch(removeComment(comment)),
            err => dispatch(receiveErrors(err))
        )
    )
}

