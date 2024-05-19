import apiSlice from '../api';

export const optionsApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getOptions: builder.query({
			query: (url) => ({
				url: url,
			}),
		}),
	}),
});

export const { useGetOptionsQuery } = optionsApi;
