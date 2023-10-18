import apiSlice from '../api';

export const noteApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getNote: builder.query({
			query: (id) => ({
				url: `/note/${id}`,
			}),
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
			invalidatesTags: () => ['notes'],
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;
					if (data) {
						dispatch(
							noteApi.util.updateQueryData(
								'getNote',
								data._id,
								(draft) => {
									Object.assign(draft, data);
								}
							)
						);
					}
				} catch (error) {}
			},
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
