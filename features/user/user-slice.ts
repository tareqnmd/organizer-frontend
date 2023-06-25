import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: null,
	email: null,
	userId: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.userId = action.payload.userId;
		},
		logOut: (state) => {
			state.name = null;
			state.email = null;
			state.userId = null;
		},
	},
});

export const { setUser, logOut } = userSlice.actions;
export default userSlice;
