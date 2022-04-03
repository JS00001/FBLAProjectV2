import type { actionOptions } from '../reducers/modalReducer';

export const SET_ACTIVE_MODAL: string = 'SET_ACTIVE_MODAL';
export const CLOSE_MODAL: string = 'CLOSE_MODAL';

const setActiveModal = (modal: string): actionOptions => ({
	type: SET_ACTIVE_MODAL,
	payload: modal,
});

const closeModal = (): actionOptions => ({
	type: CLOSE_MODAL,
});

export default {
	setActiveModal,
	closeModal,
};
