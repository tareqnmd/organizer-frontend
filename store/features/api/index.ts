import { logoutHandler } from '@/lib/utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSession } from 'next-auth/react';

const baseQuery = fetchBaseQuery({
	baseUrl: process.env.NEXT_PUBLIC_API_URL,
	credentials: 'include',
	prepareHeaders: async (headers) => {
		const authToken = await getSession();
		headers.set('Authorization', authToken?.accessToken ?? '');
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
