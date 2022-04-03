export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE';

const setActivePage = (location: Location) => ({
	type: SET_ACTIVE_PAGE,
	payload: location,
});

export default setActivePage;
