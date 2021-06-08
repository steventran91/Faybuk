import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import postsReducer from './posts_reducer';
import commentsReducer from './comments_reducer';
import requestsReducer from './requests_reducer';
import friendshipsReducer from './friendships_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  posts: postsReducer,
  comments: commentsReducer,
  requests: requestsReducer,
  friendships: friendshipsReducer 
});


export default entitiesReducer;