import { combineReducers } from 'redux';
import loginErrorsReducer from './login_errors_reducer';
import signupErrorsReducer from './signup_errors_reducer';
import generalErrorsReducer from './general_reducer';


const errorsReducer = combineReducers({
    login: loginErrorsReducer,
    signup: signupErrorsReducer,
    general: generalErrorsReducer

    
});


export default errorsReducer;