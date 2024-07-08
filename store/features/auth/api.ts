import apiSlice from '../api';

export const authAPi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		authCheck: builder.query({
			query: () => ({
				url: 'user/authorization-check',
			}),
		}),
		userUpdate: builder.mutation({
			query: (data) => ({
				url: 'user/update',
				method: 'POST',
				body: data,
			}),
		}),
	}),
});

export const { useAuthCheckQuery, useUserUpdateMutation } = authAPi;
