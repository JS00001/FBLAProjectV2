import { SWITCH_THEME } from '../actions/themeAction';

export type themeState = 'light' | 'dark';
export type actionOptions = {
	type: typeof SWITCH_THEME;
};

const initialState: themeState = 'light';

const themeReducer = (state = initialState, action: actionOptions): themeState => {
	switch (action.type) {
		case SWITCH_THEME:
			return state === 'light' ? 'dark' : 'light';
		default:
			return state;
	}
};

export default themeReducer;
