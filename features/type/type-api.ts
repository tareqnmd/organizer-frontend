import apiSlice from '../api/api-slice';

export const typeApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTypes: builder.query({
			query: () => ({
				url: '/type',
			}),
		}),
	}),
});

export const { useGetTypesQuery } = typeApi;
