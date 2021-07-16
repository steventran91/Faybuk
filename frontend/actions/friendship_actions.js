import * as FriendshipAPIUtil from '../util/friendship_api_util';
import { receiveErrors } from './session_actions';
import { findFriendshipId } from '../reducers/friendship_selector';

export const RECEIVE_FRIENDSHIP = "RECEIVE_FRIENDSHIP";
export const REMOVE_FRIENDSHIP = "REMOVE_FRIENDSHIP";

export const receiveFriendship = (friendship) => {
    return {
      type: RECEIVE_FRIENDSHIP,
      friendship,
    };
};


export const removeFriendship = (friendship) => {
    return {
        type: REMOVE_FRIENDSHIP,
        friendship 
    }
}


export const createFriendship = (friendship) => dispatch => {
    return(FriendshipAPIUtil.createFriendship(friendship)
        .then(
            friendship => dispatch(receiveFriendship(friendship)),
            err => dispatch(receiveErrors(err))
        )
    )
}


export const deleteFriendship = (friendship) => dispatch => {
    return(FriendshipAPIUtil.deleteFriendship(friendship)
        .then(
            friendship => dispatch(removeFriendship(friendship)),
            err => dispatch(receiveErrors(err))
        )
    )
}

export const deleteFriendshipWithState = (user_id, friend_id) => (disptch, getState) => {
    let friendshipId = findFriendshipId(getState().entities.friendships, user_id, friend_id);
    return (
        FriendshipAPIUtil.deleteFriendship(friendshipId)
            .then(
                friendship => dispatch(removeFriendship(friendship)),
                err => dispatch(receiveErrors(err))
            )
    )
}