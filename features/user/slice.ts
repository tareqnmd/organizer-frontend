import { AppState } from '@/app/store';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	name: null,
	email: null,
	userId: null,
	role: null,
	role_name: null,
	status: null,
	status_name: null,
};

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.name = action.payload.name;
			state.email = action.payload.email;
			state.role = action.payload.role;
			state.userId = action.payload.userId;
			state.role_name = action.payload.role_name;
			state.status = action.payload.status;
			state.status_name = action.payload.status_name;
		},
		removeUser: (state) => {
			state.name = null;
			state.email = null;
			state.role = null;
			state.userId = null;
			state.role_name = null;
			state.status = null;
			state.status_name = null;
		},
	},
});

export const { setUser, removeUser } = userSlice.actions;
export const getUserState = (state: AppState): typeof initialState =>
	state.user;
export default userSlice;
