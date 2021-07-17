import * as CommentAPIUtil from '../util/comment_api_util';
import { receiveErrors } from './session/session_actions';

export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const DELETE_COMMENT = "DELETE_COMMENT";



export const receiveComment = (comment) => {
    return {
      type: RECEIVE_COMMENT,
      comment,
    };
};

export const deleteCommentObj = (comment) => {
    return {
        type: DELETE_COMMENT,
        comment
    }
};

// export const fetchComments = () => dispatch => {
//     return(CommentAPIUtil.requestAllComments()
//         .then(comments => dispatch(receiveAllComments(comments)))
//     )
// }

// export const fetchComment = (commentId) => dispatch => {
//     return(CommentAPIUtil.requestComment(commentId)
//         .then(comment => dispatch(receiveComment(comment)))
//     )
// }

export const publishComment = (comment) => (dispatch) => {
    return(CommentAPIUtil.publishComment(comment)
        .then(
            comment => dispatch(receiveComment(comment)),
            err => dispatch(receiveErrors(err))
        )
    )
}

export const editComment = (comment) => (dispatch) => {
    return(CommentAPIUtil.editComment(comment)
        .then(
            comment => dispatch(receiveComment(comment)),
            err => dispatch(receiveErrors(err))
        )
    )
}

export const deleteComment = (commentId) => (dispatch) => {
    return(CommentAPIUtil.deleteComment(commentId)
        .then(
            comment => dispatch(deleteCommentObj(comment)),
            err => dispatch(receiveErrors(err))
        )
    )
}

