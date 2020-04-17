import { fork, all } from 'redux-saga/effects';
import { fetchSiteData } from 'sagas/site';

export default function* rootSaga() {
    yield all ([
        fork(fetchSiteData),
    ]);
}