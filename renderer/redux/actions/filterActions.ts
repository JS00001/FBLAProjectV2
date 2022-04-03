import type { actionOptions } from '../reducers/filterReducer';

export const ADD_FILTER = 'ADD_FILTER';
export const REMOVE_FILTER = 'REMOVE_FILTER';

const addFilter = (filter: string, value: number): actionOptions => ({
	type: ADD_FILTER,
	payload: {
		filter,
		value,
	},
});

const removeFilter = () => ({
	type: REMOVE_FILTER,
});

export default {
	addFilter,
	removeFilter,
};
