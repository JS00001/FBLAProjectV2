import type { themeState } from '../redux/reducers/themeReducer';
import switchThemeAction from '../redux/actions/themeAction';
import { useSelector, useDispatch } from 'react-redux';

const useTheme = () => {
	const dispatch = useDispatch();
	const theme = useSelector((state: { theme: themeState }) => state.theme);

	const switchTheme = () => {
		dispatch(switchThemeAction());
	};

	return [theme, switchTheme] as const;
};

export default useTheme;
