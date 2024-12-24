import apiSlice from '../../api';

export const timeTrackProjectApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		timeTrackProjectCreate: builder.mutation({
			query: (payload) => ({
				url: 'time-track/project',
				method: 'POST',
				body: payload,
			}),
		}),
		timeTrackProjectEdit: builder.mutation({
			query: (payload) => ({
				url: `time-track/project/${payload?.id}`,
				method: 'PATCH',
				body: payload?.data,
			}),
		}),
		timeTrackProjectDelete: builder.mutation({
			query: (id) => ({
				url: `time-track/project/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useTimeTrackProjectDeleteMutation,
	useTimeTrackProjectEditMutation,
	useTimeTrackProjectCreateMutation,
} = timeTrackProjectApi;
