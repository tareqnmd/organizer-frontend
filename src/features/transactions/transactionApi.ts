import { apiSlice } from '../api/apiSlice';

export const transactionApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTransactionsWithColumn: builder.query({
			query: () => ({
				url: '/transactions-with-column',
			}),
		}),
		addTransaction: builder.mutation({
			query: (payload) => ({
				url: '/transaction',
				method: 'POST',
				body: payload,
			}),
		}),
		transactionInfo: builder.query({
			query: (payload) => ({
				url: '/transactions-info',
			}),
		}),
	}),
});

export const {
	useGetTransactionsWithColumnQuery,
	useAddTransactionMutation,
	useTransactionInfoQuery,
} = transactionApi;
