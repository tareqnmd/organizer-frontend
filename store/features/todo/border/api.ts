import apiSlice from '../../api';

export const boardApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createBoard: builder.mutation({
			query: (payload) => ({
				url: 'todo/board',
				method: 'POST',
				body: payload,
			}),
		}),
		editBoard: builder.mutation({
			query: (payload) => ({
				url: `todo/board/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
		deleteBoard: builder.mutation({
			query: (id) => ({
				url: `todo/board/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useDeleteBoardMutation,
	useEditBoardMutation,
	useCreateBoardMutation,
} = boardApi;
