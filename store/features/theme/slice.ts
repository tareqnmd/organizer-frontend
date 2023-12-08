import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

type IThemeStore = {
	loading: boolean;
};

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
export const themeState = (state: RootState) => state.theme;
export default themeSlice;
