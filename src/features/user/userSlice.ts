import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	username: null,
	fullName: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.username = action.payload.username;
			state.fullName = action.payload.fullName;
		},
		logOut: (state) => {
			state.username = null;
			state.fullName = null;
		},
	},
});

export const { setUser, logOut } = userSlice.actions;
export default userSlice;
