import { shuffle } from 'lodash';
import produce from 'immer';
import zoovuz from '../components/game/zoovu-z.svg';
import zoovuo from '../components/game/zoovu-o.svg';
import zoovuv from '../components/game/zoovu-v.svg';
import zoovuu from '../components/game/zoovu-u.svg';
const imagesTable: any = {
	'draggable-card-0': zoovuz,
	'draggable-card-1': zoovuo,
	'draggable-card-2': zoovuo,
	'draggable-card-3': zoovuv,
	'draggable-card-4': zoovuu,
};
const imagesTableTarget: any = {
	'draggable-target-0': zoovuz,
	'draggable-target-1': zoovuo,
	'draggable-target-2': zoovuo,
	'draggable-target-3': zoovuv,
	'draggable-target-4': zoovuu,
};
export const initialState = {
	origin: shuffle([
		{ id: '0', code: 'z', img: zoovuz },
		{ id: '1', code: 'o', img: zoovuo },
		{ id: '2', code: 'o', img: zoovuo },
		{ id: '3', code: 'v', img: zoovuv },
		{ id: '4', code: 'u', img: zoovuu },
	]),
	target: [
		{ id: '0', code: 'z', img: null },
		{ id: '1', code: 'o', img: null },
		{ id: '2', code: 'o', img: null },
		{ id: '3', code: 'v', img: null },
		{ id: '4', code: 'u', img: null },
	],
};
const ACTIONS = {
	GAME_UPDATE_ORIGIN: 'GAME_UPDATE_ORIGIN',
	GAME_UPDATE_TARGET: 'GAME_UPDATE_TARGET',
};
const updateOrigin = (result: any) => {
	return (dispatch: any, getState: any) => {
		const currentState = getState().game.origin;
		const nextState = produce(currentState, (draftState: any) => {
			draftState[result.source.index].img = null;
		});
		return dispatch({
			type: ACTIONS.GAME_UPDATE_ORIGIN,
			payload: { origin: nextState },
		});
	};
};
export const updateTarget = (result: any) => {
	return (dispatch: any, getState: any) => {
		dispatch(updateOrigin(result));
		const destinationIndex = result.destination.index;
		const currentState = getState().game.target;
		const nextState = produce(currentState, (draftState: any) => {
			// draftState[result.source.index].img =
			draftState[destinationIndex].img = imagesTable[result.draggableId];
		});
		return dispatch({
			type: ACTIONS.GAME_UPDATE_TARGET,
			payload: { target: nextState },
		});
	};
};
export const updateOnTarget = (result: any) => {
	return (dispatch: any, getState: any) => {
		return dispatch({
			type: ACTIONS.GAME_UPDATE_TARGET,
			payload: { target: {} },
		});
	}
}
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
