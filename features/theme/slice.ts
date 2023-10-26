import { AppState } from '@/app/store';
import { IThemeStore } from '@/utils/types/theme/theme-types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IThemeStore = {
	loading: true,
	module: {
		id: '',
		name: '',
		links: [],
	},
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setThemeLoading: (state, action) => {
			state.loading = action.payload;
		},
		setModuleLinks: (state, action) => {
			state.module = action.payload;
		},
		resetTheme: (state) => {
			state.loading = false;
			state.module = {
				id: '',
				name: '',
				links: [],
			};
		},
	},
});

export const { resetTheme, setThemeLoading, setModuleLinks } =
	themeSlice.actions;
export const getThemeState = (state: AppState): typeof initialState =>
	state.theme;
export default themeSlice;
