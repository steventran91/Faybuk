import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/root_reducer';

const configureStore = (preloadedState ={}) => {
    const store = createStore(rootReducer, preloadedState, applyMiddleware(thunk))
    return store;
}

export default configureStore;
