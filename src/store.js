import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from 'reducers/rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'sagas/rootSaga';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
);

sagaMiddleware.run(rootSaga);

export default store;