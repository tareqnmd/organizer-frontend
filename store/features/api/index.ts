import { clearCookie } from '@/lib/server-func';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { signOut } from 'next-auth/react';
console.log('process.env.NEXT_PUBLIC_API_URL', process.env.NEXT_PUBLIC_API_URL);
const baseQuery = fetchBaseQuery({
	baseUrl: 'https://organizer-api.tareqnmd.com/',
	credentials: 'include',
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
