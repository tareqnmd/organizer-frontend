import apiSlice from '../../api';

export const budgetTransactionApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createBudgetTransaction: builder.mutation({
			query: (payload) => ({
				url: 'budget/transaction',
				method: 'POST',
				body: payload,
			}),
		}),
		editBudgetTransaction: builder.mutation({
			query: (payload) => ({
				url: `budget/transaction/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
		deleteBudgetTransaction: builder.mutation({
			query: (id) => ({
				url: `budget/transaction/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useCreateBudgetTransactionMutation,
	useEditBudgetTransactionMutation,
	useDeleteBudgetTransactionMutation,
} = budgetTransactionApi;
