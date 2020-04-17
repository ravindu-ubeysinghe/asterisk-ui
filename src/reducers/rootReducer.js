import { combineReducers } from 'redux'; 
import siteReducer from 'reducers/site';

export default combineReducers({
    site: siteReducer
});