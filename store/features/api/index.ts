import { clearCookie } from '@/lib/server-func';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { signOut } from 'next-auth/react';

const baseQuery = fetchBaseQuery({
	baseUrl: process.env.NEXT_PUBLIC_API_URL,
	credentials: 'include',
	mode: 'cors',
});

const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: async (args, api, extraOptions) => {
		let result = await baseQuery(args, api, extraOptions);
		if (result?.error?.status === 401) {
			await clearCookie();
			await signOut({
				callbackUrl: `${window.location.origin}/login`,
			});
		}
		return result;
	},
	tagTypes: [],
	endpoints: () => ({}),
});

export default apiSlice;
