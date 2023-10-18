import apiSlice from '../api';

export const noteApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getNote: builder.query({
			query: (id) => ({
				url: `/note/${id}`,
			}),
			providesTags: (result) => [
				{ type: 'single-note', id: result?._id },
			],
		}),
		getNotes: builder.query({
			query: () => ({
				url: `/note`,
			}),
			providesTags: () => ['notes'],
		}),
		addNote: builder.mutation({
			query: (payload) => ({
				url: '/note',
				method: 'POST',
				body: payload,
			}),
			invalidatesTags: () => ['notes'],
		}),
		editNote: builder.mutation({
			query: (payload) => ({
				url: `/note/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
			invalidatesTags: (result) => [
				{ type: 'single-note', id: result?._id },
				'notes',
			],
		}),
		deleteNote: builder.mutation({
			query: (id) => ({
				url: `/note/${id}`,
				method: 'DELETE',
			}),
			invalidatesTags: () => ['notes'],
		}),
	}),
});

export const {
	useAddNoteMutation,
	useDeleteNoteMutation,
	useEditNoteMutation,
	useGetNotesQuery,
	useGetNoteQuery,
} = noteApi;
