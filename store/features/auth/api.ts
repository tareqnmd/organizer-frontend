import apiSlice from '../api';

export const authAPi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		authCheck: builder.query({
			query: () => ({
				url: 'user/authorization-check',
			}),
		}),
	}),
});

export const { useAuthCheckQuery } = authAPi;
