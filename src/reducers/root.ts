import React from 'react';
import { createStore, combineReducers } from 'redux';
import { User } from './user';
import { Score } from './score';
const rootReducer = combineReducers({
	user: User,
	score: Score,
});
export const store = createStore(rootReducer);
