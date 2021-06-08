import * as CommentAPIUtil from '../utils/api/comment_api_utils';

export const RECEIVE_ALL_COMMENTS = "RECEIVE_ALL_COMMENTS";
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
export const REMOVE_COMMENT = "REMOVE_COMMENT";


export const receiveAllComments = comments => {
    return {
        type: RECEIVE_ALL_COMMENTS,
        comments
    }
};

export const receiveComment = comment => {
    return {
        type: RECEIVE_COMMENT, 
        comment 
    }
};

export const removeComment = commentId => {
    return {
        type: REMOVE_COMMENT,
        commentId 
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
        .then(comment => dispatch(receiveComment(comment)))
    )
}

export const updateComment = (comment) => dispatch => {
    return(CommentAPIUtil.updateComment(comment.id)
        .then(comment => dispatch(receiveComment(comment)))
    )
}

export const deleteComment = (commentId) => dispatch => {
    return(CommentAPIUtil.deleteComment(commentId)
        .then(commentId => dispatch(removeComment(commentId)))
    )
}

