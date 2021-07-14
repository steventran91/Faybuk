import * as LikeAPIUtil from '../utils/api/like_api_util';
import { receiveErrors } from './session_actions';



const receiveLike = (like) => {
    return ({
        type: RECEIVE_LIKE,
        like 
    })
}

const deleteLike = (like) => {
    return ({
        type: DELETE_LIKE,
        like 
    })
}

export const createLike = (like) => dispatch => {
    return (
        LikeAPIUtil.createLike(like)
            .then(
                like => dispatch(receiveLike(like)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const deleteLike = (likeId) => dispatch => {
    return (
        LikeAPIUtil.deleteLike(likeId)
            .then(
                like => dispatch(deleteLike(like)),
                err => dispatch(receiveErrors(err))
            )
    )
}