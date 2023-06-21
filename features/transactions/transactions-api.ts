import apiSlice from '../api/api-slice';

export const transactionApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		addTransaction: builder.mutation({
			query: (payload) => ({
				url: '/transaction',
				method: 'POST',
				body: payload,
			}),
		}),
		transactionInfo: builder.query({
			query: () => ({
				url: '/transactions-info',
			}),
		}),
		getTransactionTypes: builder.query({
			query: () => ({
				url: '/transaction-types',
			}),
		}),
	}),
});

export const {
	useAddTransactionMutation,
	useTransactionInfoQuery,
	useGetTransactionTypesQuery,
} = transactionApi;
