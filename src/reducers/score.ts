const ACTIONS = {
	SCORE_SET_TIME: 'SCORE_SET_TIME',
	SCORE_SET_SCORE: 'SCORE_SET_SCORE',
	SCORE_RUN_TIMER: 'SCORE_RUN_TIMER',
	SCORE_ERROR: 'SCORE_ERROR',
};
export const errorOnCards = () => {
	return (dispatch: any, getState: any) => {
		dispatch({ type: ACTIONS.SCORE_ERROR, payload: {} });
	};
};
export const runTimer = () => {
	return (dispatch: any, getState: any) => {
		const currentScore = getState().score;
		if (currentScore.playing === false) {
			dispatch({ type: ACTIONS.SCORE_RUN_TIMER, payload: {} });
		}
	};
};
export const initialState = {
	score: 0,
	time: 0,
	playing: false,
	error: 0,
};
export const Score = (
	state = initialState,
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case ACTIONS.SCORE_SET_TIME:
			return {
				...state,
				time: action.payload.time,
			};
		case ACTIONS.SCORE_SET_SCORE:
			return {
				...state,
				score: action.payload.score,
			};
		case ACTIONS.SCORE_RUN_TIMER:
			return {
				...state,
				playing: true,
			};
		case ACTIONS.SCORE_ERROR:
			return {
				...state,
				error: state.error + 1,
			};
		default:
			return state;
	}
};
