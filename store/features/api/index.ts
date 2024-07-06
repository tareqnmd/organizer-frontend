import { logoutHandler } from '@/lib/helper/auth';
import { getCookieValue } from '@/lib/helper/server-func';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseQuery = fetchBaseQuery({
	baseUrl: process.env.NEXT_PUBLIC_API_URL,
	credentials: 'include',
	prepareHeaders: async (headers) => {
		const authToken = await getCookieValue('token');
		headers.set('authorization', authToken);
		return headers;
	},
});

const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: async (args, api, extraOptions) => {
		let result: any = await baseQuery(args, api, extraOptions);
		if (result?.error?.status === 401) {
			await logoutHandler();
		}
		return { ...result, data: result?.data?.data };
	},
	tagTypes: [],
	endpoints: () => ({}),
});

export default apiSlice;
