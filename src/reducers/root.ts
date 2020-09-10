import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { User } from './user';
import { Score } from './score';
import { Game } from './game';
const loggerMiddleware = createLogger();
const rootReducer = combineReducers({
	user: User,
	score: Score,
	game: Game,
});
export const store = createStore(
	rootReducer,
	applyMiddleware(thunkMiddleware, loggerMiddleware)
);
