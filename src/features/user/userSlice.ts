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
	},
});

export const { setUser } = userSlice.actions;
export default userSlice;
