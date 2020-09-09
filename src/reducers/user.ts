const ACTIONS = {
	USER_SET_NAME: 'USER_SET_NAME',
	USER_SET_LOGED: 'USER_SET_LOGED',
};
export const setUserName = (username: string) => {
	setUserLoged();
	return (dispatch: any) => {
		dispatch(setUserLoged());
		return dispatch({
			type: ACTIONS.USER_SET_NAME,
			payload: { name: username },
		});
	};
};
export const setUserLoged = () => {
	return {
		type: ACTIONS.USER_SET_LOGED,
		payload: { loged: true },
	};
};
export const initialState = {
	name: '',
	loged: false,
};
export const User = (
	state = initialState,
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case ACTIONS.USER_SET_NAME:
			return {
				...state,
				name: action.payload.name,
			};
		case ACTIONS.USER_SET_LOGED:
			return {
				...state,
				loged: action.payload.loged,
			};
		default:
			return state;
	}
};
