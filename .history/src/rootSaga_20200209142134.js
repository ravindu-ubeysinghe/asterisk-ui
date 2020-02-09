import { fork, all } from 'redux-saga/effects';
import { fetchSiteData } from 'components/Site/SiteSaga';

export default function* rootSaga() {
    yield all ([
        fork(fetchSiteData),
    ]);
}