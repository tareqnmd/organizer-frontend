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
		getTypeInfo: builder.query({
			query: (id) => ({
				url: `budget/type/${id}`,
			}),
		}),
		getAllTypes: builder.query({
			query: () => ({
				url: 'budget/types',
			}),
		}),
	}),
});

export const {
	useDeleteBudgetTypeMutation,
	useEditBudgetTypeMutation,
	useCreateBudgetTypeMutation,
	useGetTypeInfoQuery,
	useGetAllTypesQuery,
} = budgetTypeApi;
