import {combineReducers} from 'redux';
import modalReducer from './modal_reducer';
import filterReducer from './filter_reducer';
import isFetchingReducer from './is_fetching_reducer';


const uiReducer = combineReducers({
    modal: modalReducer,
    filters: filterReducer,
    isFetching: isFetchingReducer 
});

export default uiReducer;