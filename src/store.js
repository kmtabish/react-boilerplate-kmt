import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import reducers from './reducers';
import middleware from './middlewares';


let environment = (process.env.NODE_ENV || 'development').toString().trim().toLowerCase();
if (environment != 'production') {
    middleware.push(createLogger());
}


const store = createStore(combineReducers(reducers), applyMiddleware(...middleware));

store.subscribe(() => {
    console.log('Store updated: ', store.getState());
});
export default store;
