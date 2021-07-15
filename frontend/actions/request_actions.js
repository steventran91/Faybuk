import * as RequestAPIUtil from '../utils/api/request_api_utils';
import { receiveErrors } from './session_actions';
import { findRequestId } from '../reducers/request_selector';


export const RECEIVE_REQUEST = "RECEIVE_REQUEST";
export const REMOVE_REQUEST = "REMOVE_REQUEST";

export const receiveRequest = (request) => {
    return {
        type: RECEIVE_REQUEST,
        request 
    }
}

export const removeRequest = (request) => {
    return {
        type: REMOVE_REQUEST,
        request 
    }
}

export const sendRequest = (request) => dispatch => {
    return(RequestAPIUtil.sendRequest(request)
        .then(
            request => dispatch(receiveRequest(request)),
            err => dispatch(receiveErrors(err))
        )
    )
}

export const deleteRequest = (requestId) => dispatch => {
    return(RequestAPIUtil.deleteRequest(requestId)
        .then(
            request => dispatch(removeRequest(request)),
            err => dispatch(receiveErrors(err))
        )
    )
}

export const deleteRequestWithState = (sender_id, receiver_id) => (dispatch, getState) => {
    let requestId = findRequestId(getState().entities.Requests, senderId, receiverId);
    return (
        RequestAPIUtil.deleteRequest(requestId)
            .then(
                request => dispatch(removeRequest(request)),
                err => dispatch(receiveErrors(err))
            )
    )
}

