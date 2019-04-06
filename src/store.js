import {createStore, applyMiddleware } from 'redux';
import {rootReducer} from './Redux/Reducers';
import {mw} from './Redux/Middleware';
import * as Type from './Redux/Types';

// const store = createStore(() => [], {}, applyMiddleware());

const initialState = {};

const middlewares = [mw];

const store = createStore(rootReducer, initialState, applyMiddleware(...middlewares));

store.subscribe(() => {
    console.log("state changed");
    console.log(store.getState());
})

store.dispatch({type: Type.GET_CHAMPS});

export default store;