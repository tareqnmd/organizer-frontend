import apiSlice from '../api/api-slice';
import { setUser } from '../user/user-slice';

export const loginApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (data) => ({
				url: `/login`,
				method: 'POST',
				body: data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const result = await queryFulfilled;
					const data = {
						fullName: result.data.fullName,
						username: result.data.username,
						userId: result.data._id,
					};
					localStorage.setItem('user', JSON.stringify(data));
					dispatch(setUser(data));
				} catch (error) {}
			},
		}),
	}),
});

export const { useLoginMutation } = loginApi;