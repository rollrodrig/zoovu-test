import { AnyNaptrRecord } from 'dns';

export const initialState = {
	score: 0,
	time: 25,
};
export const Score = (
	state = initialState,
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case 'SCORE_SET_TIME':
			return {
				...state,
				time: action.payload.time,
			};
		case 'SCORE_SET_SCORE':
			return {
				...state,
				score: action.payload.score,
			};
		default:
			return state;
	}
};
