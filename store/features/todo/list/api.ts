import apiSlice from '../../api';

export const listApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createList: builder.mutation({
			query: (payload) => ({
				url: 'todo/list',
				method: 'POST',
				body: payload,
			}),
		}),
		editList: builder.mutation({
			query: (payload) => ({
				url: `todo/list/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
		deleteList: builder.mutation({
			query: (id) => ({
				url: `todo/list/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useDeleteListMutation,
	useEditListMutation,
	useCreateListMutation,
} = listApi;
