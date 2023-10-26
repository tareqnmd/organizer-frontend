import apiSlice from '../api';
import { removeUser, setUser } from '../user/slice';

export const loginApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (data) => ({
				url: 'register',
				method: 'POST',
				body: data,
			}),
		}),
		login: builder.mutation({
			query: (data) => ({
				url: 'login',
				method: 'POST',
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const result = await queryFulfilled;
					const data = {
						name: result.data.name,
						email: result.data.email,
						userId: result.data._id,
						role: result.data.role,
						role_name: result.data.role_name,
						status: result.data.status,
						status_name: result.data.status_name,
					};
					dispatch(setUser(data));
				} catch (error) {}
			},
		}),
		logout: builder.mutation({
			query: (data) => ({
				url: 'logout',
				method: 'POST',
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					await queryFulfilled;
					dispatch(removeUser());
				} catch (error) {}
			},
		}),
	}),
});

export const { useLoginMutation, useLogoutMutation, useRegisterMutation } =
	loginApi;
