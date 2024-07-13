import apiSlice from '../api';

export const authAPi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		authCheck: builder.query({
			query: () => ({
				url: 'user/authorization-check',
			}),
		}),
		userUpdate: builder.mutation({
			query: ({ id, data }) => ({
				url: `user/${id}`,
				method: 'PUT',
				body: data,
			}),
		}),
	}),
});

export const { useAuthCheckQuery, useUserUpdateMutation } = authAPi;
