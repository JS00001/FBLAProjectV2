import type { actionOptions } from '../reducers/themeReducer';

export const SWITCH_THEME: string = 'SWITCH_THEME';

const switchTheme = (): actionOptions => ({
	type: SWITCH_THEME,
});

export default switchTheme;
