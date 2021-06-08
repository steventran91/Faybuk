import { ACCEPT_FRIENDSHIP, REMOVE_FRIENDSHIP } from '../actions/friendship_actions';


const friendshipsReducer = (state = {}, action) => {
    Object.freeze(state)
    let newState = Object.assign({}, state);
    switch (action.type) {
        case ACCEPT_FRIENDSHIP:
            newState[Object.keys(action.friendship.friendship)] = Object.values(action.friendship.friendship)[0]
            newState[Object.keys(action.friendship.reverse_friendship)] = Object.values(action.friendship.reverse_friendship)[0]
            return newState; 
        case REMOVE_FRIENDSHIP:
            delete newState[Object.keys(action.friendship.friendship)]
            delete newState[Object.keys(action.friendship.reverse_friendship)]
            return newState;
        default:
            return state; 
    }
}

export default friendshipsReducer; 