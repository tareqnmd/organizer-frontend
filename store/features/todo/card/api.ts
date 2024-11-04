import apiSlice from '../../api';

export const cardApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createCard: builder.mutation({
			query: (payload) => ({
				url: 'todo/card',
				method: 'POST',
				body: payload,
			}),
		}),
		editCard: builder.mutation({
			query: (payload) => ({
				url: `todo/card/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
		deleteCard: builder.mutation({
			query: (id) => ({
				url: `todo/card/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useDeleteCardMutation,
	useEditCardMutation,
	useCreateCardMutation,
} = cardApi;
