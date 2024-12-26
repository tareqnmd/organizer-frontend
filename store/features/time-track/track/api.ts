import apiSlice from '../../api';

export const timeTrackApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		timeTrackCreate: builder.mutation({
			query: (payload) => ({
				url: 'time-track',
				method: 'POST',
				body: payload,
			}),
		}),
		timeTrackEdit: builder.mutation({
			query: (payload) => ({
				url: `time-track/${payload?.id}`,
				method: 'PATCH',
				body: payload?.data,
			}),
		}),
		timeTrackDelete: builder.mutation({
			query: (id) => ({
				url: `time-track/${id}`,
				method: 'DELETE',
			}),
		}),
	}),
});

export const {
	useTimeTrackDeleteMutation,
	useTimeTrackEditMutation,
	useTimeTrackCreateMutation,
} = timeTrackApi;
