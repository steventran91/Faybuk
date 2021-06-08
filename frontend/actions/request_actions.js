import * as RequestAPIUtil from '../utils/api/request_api_utils';

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

export const createRequest = (request) => dispatch => {
    return(RequestAPIUtil.createRequest(request)
        .then(request => dispatch(receiveRequest(request)))
    )
}

export const deleteRequest = (request) => dispatch => {
    return(RequestAPIUtil.deleteRequest(request)
        .then(() => dispatch(removeRequest(request)))
    )
}

