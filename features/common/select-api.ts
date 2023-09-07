import apiSlice from '../api/api-slice';

export const typeApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getOptions: builder.query({
			query: (url) => ({
				url: url,
			}),
		}),
	}),
});

export const { useGetOptionsQuery } = typeApi;
