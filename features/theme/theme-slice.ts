import { AppState } from '@/app/store';
import { IThemeStore } from '@/utils/types/theme-types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: IThemeStore = {
	loading: false,
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setThemeLoading: (state, action) => {
			state.loading = action.payload;
		},
	},
});

export const { setThemeLoading } = themeSlice.actions;
export const getThemeState = (state: AppState): typeof initialState =>
	state.theme;
export default themeSlice;
