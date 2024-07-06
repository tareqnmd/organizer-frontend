import { RootState } from '@/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	prevLink: '/',
};

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setPrevLink: (state, action) => {
			state.prevLink = action.payload;
		},
	},
});

export const { setPrevLink } = themeSlice.actions;
export const getUserState = (state: RootState): typeof initialState =>
	state.theme;
export default themeSlice;
