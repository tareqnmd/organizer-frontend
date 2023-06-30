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
		deleteTransaction: builder.mutation({
			query: (id) => ({
				url: `/transaction/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const { useAddTransactionMutation, useDeleteTransactionMutation } =
	transactionApi;
