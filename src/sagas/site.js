import { takeEvery, put, call } from 'redux-saga/effects';
import { config, constants } from 'config';
import { get } from 'utils/api';

function* saveSiteData(payload) {
    if (payload?.success) {
        yield put({
            type: 'SAVE_SITE_DATA',
            payload
        });
    } else {
        yield call(setServerError, payload);
    }
}

function* setServerError(payload) {
    yield put({
        type: 'SET_SERVER_ERROR',
        payload: (payload?.error_message || constants.GENERIC_SERVER_ERROR),
    });
}

export function* processSiteData() {
    yield put({ type: 'LOADING_SITE_DATA' });
    const domain = window.location.hostname.replace('www', '');
    let response = yield call(get, `${config.API_URL}/site?domain=${domain}`);
    yield call(saveSiteData, response);
    yield put({ type: 'LOADED_SITE_DATA' });
}

export function* fetchSiteData() {
    yield takeEvery('FETCH_SITE_DATA', processSiteData);
}