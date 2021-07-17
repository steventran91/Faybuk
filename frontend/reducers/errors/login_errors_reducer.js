import { RECEIVE_CURRENT_USER, RECEIVE_LOGIN_ERRORS, CLEAR_ERRORS } from "../../actions/session/session_actions";

const loginErrorsReducer = (state = [], action) => {
  Object.freeze(state);

  switch (action.type) {
    case RECEIVE_LOGIN_ERRORS:
      return action.errors??state;
    case RECEIVE_CURRENT_USER:
      return [];
    case CLEAR_ERRORS:
      return [];
    default:
      return state;
  }
};

export default loginErrorsReducer;