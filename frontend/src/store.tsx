import { createStore, compose } from 'redux';
import { pageReducer } from './reducers';

const rootReducer = pageReducer

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
    rootReducer,
    composeEnhancers()
);

export default store;