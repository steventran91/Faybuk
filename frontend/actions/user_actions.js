import * as UserAPIUtil from '../utils/users_util';
import { receiveErrors, receiveCurrentUser } from './session_actions'

export const RECEIVE_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const REQUEST_USER = "REQUEST_USER";

export const receiveUsers = users => ({
    type: RECEIVE_USERS,
    users 
});

export const receiveUser = (data) => ({
    type: RECEIVE_USER,
    data
});

export const requestUser = () => ({
    type: REQUEST_USER
});

export const fetchUser = (id) => dispatch => {
    return (
        UserAPIUtil.requestUser(id)
            .then(
                user => dispatch(receiveUser(user)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const fetchUsers = (idArr) => dispatch => {
    return (
        UserAPIUtil.requestAllUsers({idArr: idArr})
            .then(
                users => dispatch(receiveUsers(users)),
                err => dispatch(receiveErrors(err))
            )
    )
}


export const updateUser = user => dispatch => {
    return(
        UserAPIUtil.updateUser(user)
            .then(
                user => dispatch(receiveUser(user)),
                err => dispatch(receiveErrors(err))    
            )
    )
}

export const updateUserPhoto = user => dispatch => {
    return (
        UserAPIUtil.updateUserPhoto(user)
            .then(
                user => dispatch(receiveUser(user)),
                err => dispatch(receiveErrors(err))
            )
    )
}

export const fetchCurrentUser = () => (dispatch, getState) => {
    return (
        UserAPIUtil.requestUser(getState().session.currentUser)
            .then(
                user => dispatch(receiveCurrentUser(user)),
                err => dispatch(receiveErrors(err))
            )
    )
}

