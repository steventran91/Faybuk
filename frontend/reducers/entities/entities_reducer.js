import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postReducer from './post_reducer';
import commentReducer from './comment_reducer';
import friendRequestReducer from './friend_request_reducer';
import friendshipsReducer from './friendship_reducer';
import likeReducer from './like_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postReducer,
  comments: commentReducer,
  friendRequests: friendRequestReducer,
  friendships: friendshipsReducer,
  likes: likeReducer
});


export default entitiesReducer;