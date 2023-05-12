import { apiSlice } from '../api/apiSlice';

export const userApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTransactions: builder.query({
			query: () => ({
				url: '/transactions',
			}),
		}),
	}),
});

export const { useGetTransactionsQuery } = userApi;
