import * as UserAPIUtil from '../utils/users_util';

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USERS = "RECEIVE_USERS";

export const receiveAllUsers = users => ({
    type: RECEIVE_ALL_USERS,
    users 
});

export const receiveUser = user => ({
    type: RECEIVE_USER,
    user
});

export const fetchAllUsers = () => dispatch => {
    return(UserAPIUtil.fetchAllUsers()
        .then(users => dispatch(receiveAllUsers(users)))
    )
};

export const fetchUser = userId => dispatch => {
    return(UserAPIUtil.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
    )
};

export const updateUser = user => dispatch => {
    return(UserAPIUtil.updateUser(user)
        .then(user => dispatch(receiveUser(user)))
    )
}

