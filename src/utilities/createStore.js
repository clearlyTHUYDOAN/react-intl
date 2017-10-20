import { createStore, compose } from 'redux';
// import reducer from '../reducers/index';
import reducer from '../reducers/locales';
import { INITIAL_STATE } from '../reducers/locales';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeEnhancers(),
);

export default store;