import apiSlice from '../../api';

export const noteApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createType: builder.mutation({
			query: (payload) => ({
				url: '/type',
				method: 'POST',
				body: payload,
			}),
		}),
		editType: builder.mutation({
			query: (payload) => ({
				url: `/type/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
		deleteType: builder.mutation({
			query: (id) => ({
				url: `/type/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useCreateTypeMutation,
	useEditTypeMutation,
	useDeleteTypeMutation,
} = noteApi;
