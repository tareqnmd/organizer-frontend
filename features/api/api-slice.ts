import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { removeUser } from '../user/user-slice';

const baseQuery = fetchBaseQuery({
	baseUrl: process.env.NEXT_PUBLIC_API_URL,
	credentials: 'include',
});

const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: async (args, api, extraOptions) => {
		let result = await baseQuery(args, api, extraOptions);
		if (result?.error?.status === 401) {
			api.dispatch(removeUser());
		}
		return result;
	},
	tagTypes: [],
	endpoints: () => ({}),
});

export default apiSlice;
