import apiSlice from '../api/api-slice';
import { removeUser, setUser } from './user-slice';

export const loginApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getUser: builder.query({
			query: (id) => ({
				url: `/user/${id}`,
			}),
		}),
		register: builder.mutation({
			query: (data) => ({
				url: 'user/register',
				method: 'POST',
				body: data,
			}),
		}),
		login: builder.mutation({
			query: (data) => ({
				url: 'user/login',
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
		userUpdate: builder.mutation({
			query: ({ id, data }) => ({
				url: `user/${id}`,
				method: 'PUT',
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
		userStatusUpdate: builder.mutation({
			query: ({ id, data }) => ({
				url: `user/${id}`,
				method: 'PUT',
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const result = await queryFulfilled;
					const data = {};
				} catch (error) {}
			},
		}),
		logout: builder.mutation({
			query: (data) => ({
				url: 'user/logout',
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

export const {
	useGetUserQuery,
	useLoginMutation,
	useUserUpdateMutation,
	useLogoutMutation,
	useRegisterMutation,
	useUserStatusUpdateMutation,
} = loginApi;
