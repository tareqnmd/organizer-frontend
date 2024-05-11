import apiSlice from '../../api';

export const budgetCategoryApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createBudgetCategory: builder.mutation({
			query: (payload) => ({
				url: 'budget/type-category',
				method: 'POST',
				body: payload,
			}),
		}),
		editBudgetCategory: builder.mutation({
			query: (payload) => ({
				url: `budget/type-category/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
		deleteBudgetCategory: builder.mutation({
			query: (id) => ({
				url: `budget/type-category/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useCreateBudgetCategoryMutation,
	useEditBudgetCategoryMutation,
	useDeleteBudgetCategoryMutation,
} = budgetCategoryApi;
