import apiSlice from '../api';

export const noteApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createNote: builder.mutation({
			query: (payload) => ({
				url: '/note',
				method: 'POST',
				body: payload,
			}),
		}),
		editNote: builder.mutation({
			query: (payload) => ({
				url: `/note/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
		deleteNote: builder.mutation({
			query: (id) => ({
				url: `/note/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useCreateNoteMutation,
	useDeleteNoteMutation,
	useEditNoteMutation,
} = noteApi;
