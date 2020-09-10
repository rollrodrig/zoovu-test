import { shuffle } from 'lodash';
import produce from 'immer';
import zoovuz from '../components/game/zoovu-z.svg';
import zoovuo from '../components/game/zoovu-o.svg';
import zoovuv from '../components/game/zoovu-v.svg';
import zoovuu from '../components/game/zoovu-u.svg';
const imagesTable: any = {
	'card-0': zoovuz,
	'card-1': zoovuo,
	'card-2': zoovuo,
	'card-3': zoovuv,
	'card-4': zoovuu,
};
export const initialState = {
	origin: shuffle([
		{ id: 'card-0', code: 'z', img: zoovuz },
		{ id: 'card-1', code: 'o', img: zoovuo },
		{ id: 'card-2', code: 'o', img: zoovuo },
		{ id: 'card-3', code: 'v', img: zoovuv },
		{ id: 'card-4', code: 'u', img: zoovuu },
	]),
	target: [
		{ id: 'card-target-0', code: 'z', img: null },
		{ id: 'card-target-1', code: 'o', img: null },
		{ id: 'card-target-2', code: 'o', img: null },
		{ id: 'card-target-3', code: 'v', img: null },
		{ id: 'card-target-4', code: 'u', img: null },
	],
};
const ACTIONS = {
	GAME_UPDATE_ORIGIN: 'GAME_UPDATE_ORIGIN',
	GAME_UPDATE_TARGET: 'GAME_UPDATE_TARGET',
};
const updateOrigin = (source: any) => {
	return (dispatch: any, getState: any) => {
		const currentState = getState().game.origin;
		const nextState = produce(currentState, (draftState: any) => {
			draftState[source.index].img = null;
		});
		return dispatch({
			type: ACTIONS.GAME_UPDATE_ORIGIN,
			payload: { origin: nextState },
		});
	};
};
export const updateTarget = (source: any, destination: any) => {
	return (dispatch: any, getState: any) => {
		// dispatch(updateOrigin(source));
		const sourceId = source.droppableId.split('').pop();
		const destinationId = destination.droppableId.split('').pop();
		const currentState = getState().game.target;
		const nextState = produce(currentState, (draftState: any) => {
			draftState[destinationId].img = imagesTable[`card-${sourceId}`];
		});
		return dispatch({
			type: ACTIONS.GAME_UPDATE_TARGET,
			payload: { target: nextState },
		});
	};
};
export const Game = (
	state = initialState,
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case ACTIONS.GAME_UPDATE_ORIGIN:
			return {
				...state,
				origin: action.payload.origin,
			};
		case ACTIONS.GAME_UPDATE_TARGET:
			return {
				...state,
				target: action.payload.target,
			};
		default:
			return state;
	}
};
