import { shuffle } from 'lodash';
import zoovuz from '../components/game/zoovu-z.svg';
import zoovuo from '../components/game/zoovu-o.svg';
import zoovuv from '../components/game/zoovu-v.svg';
import zoovuu from '../components/game/zoovu-u.svg';
export const initialState = {
	images: {
		z: zoovuz,
		o: zoovuo,
		v: zoovuv,
		u: zoovuu,
	},
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
const updateOrigin = (cardId: string, targetId: string) => {
	return (dispatch: any, getState: any) => {
		return dispatch({
			type: ACTIONS.GAME_UPDATE_ORIGIN,
			payload: { cardId, targetId },
		});
	};
};
const updateTarget = (cardId: string, targetId: string) => {
	return (dispatch: any, getState: any) => {
		dispatch(updateOrigin(cardId, targetId));
		return dispatch({
			type: ACTIONS.GAME_UPDATE_TARGET,
			payload: { cardId, targetId },
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
			};
		case ACTIONS.GAME_UPDATE_TARGET:
			return {
				...state,
			};
		default:
			return state;
	}
};
