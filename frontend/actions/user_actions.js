import * as UserAPIUtil from '../utils/users_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users 
});

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const fetchAllUsers = () => dispatch => {
    return(UserAPIUtil.requestAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
    )
};

export const fetchUser = userId => dispatch => {
    return(UserAPIUtil.requestUser(userId)
        .then(user => dispatch(receiveUser(user)))
    )
};

export const updateUser = user => dispatch => {
    return(UserAPIUtil.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
    )
}

