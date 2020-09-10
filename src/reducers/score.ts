const ACTIONS = {
	SCORE_SET_TIME: 'SCORE_SET_TIME',
	SCORE_SET_SCORE: 'SCORE_SET_SCORE',
	SCORE_RUN_TIMER: 'SCORE_RUN_TIMER',
	SCORE_ERROR: 'SCORE_ERROR',
	SCORE_SUCCESS: 'SCORE_SUCCESS',
};
export const errorOnCards = () => {
	return (dispatch: any, getState: any) => {
		dispatch({ type: ACTIONS.SCORE_ERROR, payload: {} });
	};
};
export const verifyOrder = (target: any[]) => {
	const expect = ['z', 'o', 'o', 'v', 'u'];
	for (let i = 0; i < target.length; i++) {
		if (target[i].code !== expect[i]) {
			return false;
		}
	}
	return true;
};
export const setSuccess = () => {
	return (dispatch: any, getState: any) => {
		dispatch({ type: ACTIONS.SCORE_SUCCESS, payload: {} });
		dispatch({ type: ACTIONS.SCORE_RUN_TIMER, payload: { run: false } });
	};
};
export const runTimer = (run: boolean) => {
	return (dispatch: any, getState: any) => {
		const currentScore = getState().score;
		if (currentScore.playing === false) {
			dispatch({ type: ACTIONS.SCORE_RUN_TIMER, payload: { run: run } });
		}
	};
};
export const initialState = {
	success: false,
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
				playing: action.payload.run,
			};
		case ACTIONS.SCORE_ERROR:
			return {
				...state,
				error: state.error + 1,
			};
		case ACTIONS.SCORE_SUCCESS:
			return {
				...state,
				success: true,
			};
		default:
			return state;
	}
};
