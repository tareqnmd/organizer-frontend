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
	}),
});

export const { useAddTransactionMutation } = transactionApi;
