import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	username: null,
	fullName: null,
	userId: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.username = action.payload.username;
			state.fullName = action.payload.fullName;
			state.userId = action.payload.userId;
		},
		logOut: (state) => {
			state.username = null;
			state.fullName = null;
			state.userId = null;
		},
	},
});

export const { setUser, logOut } = userSlice.actions;
export default userSlice;
