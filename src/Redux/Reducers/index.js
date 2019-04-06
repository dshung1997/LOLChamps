import { combineReducers } from 'redux';
import {filter} from './filter.js';
import {champs} from './champs.js';

export const rootReducer = combineReducers({
    // filter,
    champs
});