import apiSlice from '../api';

export const optionsApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getOptions: builder.query({
			query: (url) => ({
				url: url,
			}),
			providesTags: (result, error, arg) => ['Options', arg],
		}),
	}),
});

export const { useGetOptionsQuery } = optionsApi;
