export const initialState = {
	name: '',
};
export const User = (
	state = initialState,
	action: { type: string; payload: any }
) => {
	switch (action.type) {
		case 'USER_SET_NAME':
			return {
				...state,
				name: action.payload.name,
			};
		default:
			return state;
	}
};
