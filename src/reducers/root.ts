import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { User } from './user';
import { Score } from './score';
const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
	user: User,
	score: Score,
});
export const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, loggerMiddleware)
);
