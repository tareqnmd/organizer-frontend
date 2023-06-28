import apiSlice from '../api/api-slice';
import { removeUser, setUser } from './user-slice';

export const loginApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
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
					};
					localStorage.setItem('user', JSON.stringify(data));
					dispatch(setUser(data));
				} catch (error) {}
			},
		}),
		userUpdate: builder.mutation({
			query: (data) => ({
				url: 'user/profile',
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
					};
					localStorage.setItem('user', JSON.stringify(data));
					dispatch(setUser(data));
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
					localStorage.removeItem('user');
					dispatch(removeUser());
				} catch (error) {}
			},
		}),
	}),
});

export const {
	useLoginMutation,
	useUserUpdateMutation,
	useLogoutMutation,
	useRegisterMutation,
} = loginApi;
