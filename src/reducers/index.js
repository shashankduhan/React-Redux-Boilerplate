import { combineReducers } from 'redux';
import counterReducers from './counterReducer';

export default combineReducers({
    counter: counterReducers
});