import apiSlice from '../api/api-slice';

export const transactionApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTransaction: builder.query({
			query: (id) => ({
				url: `/transaction/${id}`,
			}),
		}),
		addTransaction: builder.mutation({
			query: (payload) => ({
				url: '/transaction',
				method: 'POST',
				body: payload,
			}),
		}),
		editTransaction: builder.mutation({
			query: (payload) => ({
				url: `/transaction/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
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

export const {
	useAddTransactionMutation,
	useDeleteTransactionMutation,
	useEditTransactionMutation,
	useGetTransactionQuery,
} = transactionApi;
