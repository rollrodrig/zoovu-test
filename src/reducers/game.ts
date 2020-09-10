import { shuffle } from 'lodash';
import produce from 'immer';
import { errorOnCards, resetStore } from './score';
import zoovuz from '../components/game/zoovu-z.svg';
import zoovuo from '../components/game/zoovu-o.svg';
import zoovuv from '../components/game/zoovu-v.svg';
import zoovuu from '../components/game/zoovu-u.svg';
export const initialState = () => ({
	origin: shuffle([
		{ id: '0', code: 'z', img: zoovuz },
		{ id: '1', code: 'o', img: zoovuo },
		{ id: '2', code: 'o', img: zoovuo },
		{ id: '3', code: 'v', img: zoovuv },
		{ id: '4', code: 'u', img: zoovuu },
	]),
	target: [
		{ id: '0', code: null, img: null },
		{ id: '1', code: null, img: null },
		{ id: '2', code: null, img: null },
		{ id: '3', code: null, img: null },
		{ id: '4', code: null, img: null },
	],
});
const ACTIONS = {
	GAME_UPDATE_ORIGIN: 'GAME_UPDATE_ORIGIN',
	GAME_UPDATE_TARGET: 'GAME_UPDATE_TARGET',
	GAME_RESET: 'GAME_RESET',
};
const verifyMatch = (result: any) => {
	const cardId = result.draggableId.split('_')[1];
	const destintyId = result.destination.droppableId.split('_')[1];
	return cardId === destintyId;
};
export const updateCards = (result: any) => {
	return (dispatch: any, getState: any) => {
		dispatch(updateTarget(result));
		if (verifyMatch(result) === false) dispatch(errorOnCards());
		const originState = getState().game.origin;
		const nextState = produce(originState, (draftState: any) => {
			draftState[result.source.index].img = null;
		});
		return dispatch({
			type: ACTIONS.GAME_UPDATE_ORIGIN,
			payload: { origin: nextState },
		});
	};
};
const updateTarget = (result: any) => {
	return (dispatch: any, getState: any) => {
		const destinationIndex = result.destination.index;
		const originState = getState().game.origin;
		const targetState = getState().game.target;
		const nextState = produce(targetState, (draftState: any) => {
			draftState[destinationIndex].img =
				originState[result.source.index].img;
			draftState[destinationIndex].code =
				originState[result.source.index].code;
		});
		return dispatch({
			type: ACTIONS.GAME_UPDATE_TARGET,
			payload: { target: nextState },
		});
	};
};
export const sortOnTargetDroppable = (result: any) => {
	const sourceIndex = result.source.index;
	const targetIndex = result.destination.index;
	return (dispatch: any, getState: any) => {
		const currentState = getState().game.target;
		const nextState = produce(currentState, (draftState: any) => {
			const tIndex =
				result.destination.index > 4 ? 4 : result.destination.index;
			const tmp = draftState[tIndex];
			draftState[tIndex] = draftState[result.source.index];
			draftState[result.source.index] = tmp;
		});
		return dispatch({
			type: ACTIONS.GAME_UPDATE_TARGET,
			payload: { target: nextState },
		});
	};
};
export const resetGame = () => {
	return (dispatch: any) => {
		dispatch(resetStore());
		return dispatch({
			type: ACTIONS.GAME_RESET,
			payload: { state: initialState() },
		});
	};
};
export const Game = (
	state = initialState(),
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
		case ACTIONS.GAME_RESET:
			return {
				...action.payload.state,
			};
		default:
			return state;
	}
};
