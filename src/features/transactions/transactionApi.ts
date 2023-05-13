import { apiSlice } from '../api/apiSlice';

export const userApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTransactions: builder.query({
			query: () => ({
				url: '/transactions',
			}),
		}),
		addTransaction: builder.mutation({
			query: (payload) => ({
				url: '/transaction',
				method: 'POST',
				data: payload,
			}),
		}),
	}),
});

export const { useGetTransactionsQuery, useAddTransactionMutation } = userApi;
