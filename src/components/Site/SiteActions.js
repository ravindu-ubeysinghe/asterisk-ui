import { FETCH_SITE_DATA, SET_SERVER_ERROR } from './SiteActionTypes';
import { config, constants } from '../../config';

export default function fetchSiteData() {
    return function(dispatch) {
        const domain = window.location.hostname.replace('www', '');
        fetch(`${config.API_URL}/site?domain=${domain}`)
                .then(response => 
                        response.json())
                .then(site_data => {
                    if (site_data.success){
                        dispatch({
                            type: FETCH_SITE_DATA,
                            payload: site_data
                        });
                    } else {
                        dispatch({
                            type: SET_SERVER_ERROR,
                            payload: (site_data?.error || constants.GENERIC_SERVER_ERROR),
                        });
                    }
                })
                .catch(err => {
                    dispatch({
                        type: SET_SERVER_ERROR,
                        payload: constants.GENERIC_SERVER_ERROR,
                    });
                });
    }
}