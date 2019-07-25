import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_SITE_DATA, SET_SERVER_ERROR, SAVE_SITE_DATA } from './SiteActionTypes';
import { config, constants } from '../../config';
import { get } from '../../utils/api';

function* saveSiteData(payload) {
    console.log(payload);
    if (payload?.success) {
        yield put({
            type: SAVE_SITE_DATA,
            payload
        });
    } else {
        yield call(setServerError, payload);
    }
}

function* setServerError(payload) {
    yield put({
        type: SET_SERVER_ERROR,
        payload: (payload?.error_message || constants.GENERIC_SERVER_ERROR),
    });
}

export function* processSiteData() {
    const domain = window.location.hostname.replace('www', '');
    let response = yield call(get, `${config.API_URL}/site?domain=${domain}`);
    yield call(saveSiteData, response);
}

export function* fetchSiteData() {
    yield takeEvery(FETCH_SITE_DATA, processSiteData);
}