import { createStore, combineReducers } from 'redux';
import pageReducer from './reducers/pageReducer';
import themeReducer from './reducers/themeReducer';
import modalReducer from './reducers/modalReducer';
import filterReducer from './reducers/filterReducer';

const reducers = combineReducers({
	page: pageReducer,
	theme: themeReducer,
	modal: modalReducer,
	filter: filterReducer,
});

export default createStore(reducers);
