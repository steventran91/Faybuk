import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { sendFriendRequest, deleteFriendRequestWithState } from '../../actions/friend_request_actions';
import { findRequestId } from '../../reducers/selectors/friend_request_selectors'; 


const mapDispatchToPropsSend = (dispatch, ownProps) => {
    let req = {requester_id: ownProps.currentUserId, requested_id: ownProps.wallUserId}
    return {
        handleRequest: () => dispatch(sendFriendRequest(req))
    }
}

const mapDispatchToPropsCancel = (dispatch, ownProps) => {
    return {
        handleRequest: () => dispatch(deleteFriendRequestWithState(ownProps.currentUserId, ownProps.wallUserId))
    }
}

const FriendRquestButton = (props) => {
    return (
        <button className="profile-nav-button" onClick={props.handleRequest}>
            <div className={`${props.icon}`}></div>
            {props.text}
        </button>
    )
}

export const SendRequest = connect(null, mapDispatchToPropsSend)(FriendRquestButton);
export const CancelRequest = connect(null, mapDispatchToPropsCancel)(FriendRquestButton);