import apiSlice from '../../api';

export const workspaceApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		createWorkspace: builder.mutation({
			query: (payload) => ({
				url: 'todo/workspace',
				method: 'POST',
				body: payload,
			}),
		}),
		editWorkspace: builder.mutation({
			query: (payload) => ({
				url: `todo/workspace/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
		}),
		deleteWorkspace: builder.mutation({
			query: (id) => ({
				url: `todo/workspace/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useDeleteWorkspaceMutation,
	useEditWorkspaceMutation,
	useCreateWorkspaceMutation,
} = workspaceApi;
