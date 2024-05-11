import apiSlice from '../../api';

export const budgetTypeApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createType: builder.mutation({
			query: (payload) => ({
				url: 'budget/type',
				method: 'POST',
				body: payload,
			}),
		}),
		editType: builder.mutation({
			query: (payload) => ({
				url: `budget/type/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
		deleteType: builder.mutation({
			query: (id) => ({
				url: `budget/type/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useCreateTypeMutation,
	useEditTypeMutation,
	useDeleteTypeMutation,
} = budgetTypeApi;
