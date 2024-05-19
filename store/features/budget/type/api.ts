import apiSlice from '../../api';

export const budgetTypeApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createBudgetType: builder.mutation({
			query: (payload) => ({
				url: 'budget/type',
				method: 'POST',
				body: payload,
			}),
		}),
		editBudgetType: builder.mutation({
			query: (payload) => ({
				url: `budget/type/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
		deleteBudgetType: builder.mutation({
			query: (id) => ({
				url: `budget/type/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useDeleteBudgetTypeMutation,
	useEditBudgetTypeMutation,
	useCreateBudgetTypeMutation,
} = budgetTypeApi;
