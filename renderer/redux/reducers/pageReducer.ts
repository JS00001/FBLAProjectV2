import { SET_ACTIVE_PAGE } from '../actions/pageActions';

export type actionOptions = {
	type: typeof SET_ACTIVE_PAGE;
	payload: Location;
};

export type pageState = null | Location;

const pageReducer = (state = null, action: actionOptions): pageState => {
	switch (action.type) {
		case SET_ACTIVE_PAGE:
			return action.payload;
		default:
			return state;
	}
};

export default pageReducer;
