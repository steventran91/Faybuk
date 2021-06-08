import * as FriendshipAPIUtil from '../utils/api/friendship_api_utils';

export const ACCEPT_FRIENDSHIP = "ACCEPT_FRIENDSHIP";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";

export const acceptFriendship = (friendship) => {
    return {
        type: ACCEPT_FRIENDSHIP,
        friendship 
    }
};


export const removeFriendship = (friendship) => {
    return {
        type: REMOVE_FRIENDSHIP,
        friendship 
    }
}


export const createFriendship = (friendship) => dispatch => {
    return(FriendshipAPIUtil.createFriendship(friendship)
        .then(friendship => dispatch(acceptFriendship(friendship)))
    )
}


export const deleteFriendship = (friendship) => dispatch => {
    return(FriendshipAPIUtil.deleteFriendship(friendship)
        .then(friendship => dispatch(removeFriendship(friendship)))
    )
}