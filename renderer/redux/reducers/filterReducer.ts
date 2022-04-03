import { ADD_FILTER, REMOVE_FILTER } from '../actions/filterActions';

export type filterState = {
	[key: string]: number;
};

export type actionOptions = {
	type: typeof ADD_FILTER | typeof REMOVE_FILTER;
	payload: {
		filter: string;
		value: number;
	};
};

const initialState: filterState = {};

const filterReducer = (state = initialState, action: actionOptions): filterState => {
	switch (action.type) {
		case ADD_FILTER:
			return {
				...state,
				[action.payload.filter]: action.payload.value,
			};
		case REMOVE_FILTER:
			return {
				...state,
				[action.payload.filter]: 0,
			};
		default:
			return state;
	}
};

export default filterReducer;
