import { RECEIVE_REQUEST, REMOVE_REQUEST } from '../actions/request_actions';


const requestsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_REQUEST:
            newState[action.request.id] = action.request 
            return newState;
        case REMOVE_REQUEST:
            delete newState[action.request.id]
            return newState;        
        default:
            return state; 
    }
}

export default requestsReducer;