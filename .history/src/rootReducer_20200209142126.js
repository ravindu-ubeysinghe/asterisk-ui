import { combineReducers } from 'redux'; 
import siteReducer from 'components/Site/SiteReducer';

export default combineReducers({
    site: siteReducer
});