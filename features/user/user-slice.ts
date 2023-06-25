import { getUserItem } from '@/utils/helpers';
import { createSlice } from '@reduxjs/toolkit';

const initialState = getUserItem();

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
