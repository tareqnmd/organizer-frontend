import { apiSlice } from '../api/apiSlice';

export const transactionApi = apiSlice.injectEndpoints({
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
				body: payload,
			}),
		}),
	}),
});

export const { useGetTransactionsQuery, useAddTransactionMutation } =
	transactionApi;
