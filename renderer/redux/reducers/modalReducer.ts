import { SET_ACTIVE_MODAL, CLOSE_MODAL } from '../actions/modalAction';

export type modalState = null | string;
export type actionOptions = {
	type: typeof SET_ACTIVE_MODAL | typeof CLOSE_MODAL;
	payload?: string;
};

const initialState: modalState = null;

const modalReducer = (state = initialState, action: actionOptions): modalState => {
	switch (action.type) {
		case SET_ACTIVE_MODAL:
			return action.payload;
		case CLOSE_MODAL:
			return null;
		default:
			return state;
	}
};

export default modalReducer;
