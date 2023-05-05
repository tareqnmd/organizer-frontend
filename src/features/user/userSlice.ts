import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	username: null,
	userId: null,
	fullName: null,
};

const userSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state = action.payload;
		},
	},
});

export const { setUser } = userSlice.actions;
export default userSlice;
