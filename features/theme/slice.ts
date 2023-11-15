import { AppState } from '@/app/store';
import { IThemeStore } from '@/utils/types/theme/theme-types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IThemeStore = {
	loading: true,
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setThemeLoading: (state, action) => {
			state.loading = action.payload;
		},
		resetTheme: (state) => {
			state.loading = false;
		},
	},
});

export const { resetTheme, setThemeLoading } = themeSlice.actions;
export const getThemeState = (state: AppState): typeof initialState =>
	state.theme;
export default themeSlice;
