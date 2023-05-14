import { apiSlice } from '../api/apiSlice';

export const systemApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTypes: builder.query({
			query: () => ({
				url: '/types',
			}),
		}),
	}),
});

export const { useGetTypesQuery } = systemApi;
