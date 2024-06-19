import { clearCookie, getCookieValue } from '@/lib/helper/server-func';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { signOut } from 'next-auth/react';

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
			await clearCookie();
			await signOut({
				callbackUrl: `${window.location.origin}/login`,
			});
		}
		return { ...result, data: result?.data?.data };
	},
	tagTypes: [],
	endpoints: () => ({}),
});

export default apiSlice;
