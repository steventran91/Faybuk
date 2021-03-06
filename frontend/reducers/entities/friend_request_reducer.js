import { RECEIVE_CURRENT_USER } from "../../actions/session/session_actions";
import { RECEIVE_FRIEND_REQUEST, DELETE_FRIEND_REQUEST } from '../../actions/friend_request_actions';
import { RECEIVE_FRIENDSHIP } from "../../actions/friendship_actions";
import { findRequestId } from '../selectors/friend_request_selectors';


const friendRequestReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      if (action.data.friend_requests) {
        Object.values(action.data.friend_requests).forEach((request) => {
          newState[request.id] = request;
        });
      }
      return newState;
    case RECEIVE_FRIEND_REQUEST:
      newState[action.friendRequest.id] = action.friendRequest;
      return newState;
    case DELETE_FRIEND_REQUEST:
      delete newState[action.friendRequest.id];
      return newState;
    case RECEIVE_FRIENDSHIP:
      const requestId = findRequestId(
        newState,
        action.friendship.friend_id,
        action.friendship.user_id
      );
      delete newState[requestId];
      return newState;
    default:
      return state;
  }
};

export default friendRequestReducer;