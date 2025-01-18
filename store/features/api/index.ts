import { AuthErrorEnum } from '@/lib/helper/auth';
import { CommonHeaders } from '@/lib/helper/shared/enum';
import { fetchSession, logoutHandler } from '@/lib/utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { getSession } from 'next-auth/react';

const baseQuery = fetchBaseQuery({
	baseUrl: process.env.NEXT_PUBLIC_API_URL,
	credentials: 'include',
	prepareHeaders: async (headers) => {
		const authToken = await getSession();
		headers.set(CommonHeaders.AUTHORIZATION, authToken?.accessToken ?? '');
		headers.set(
			CommonHeaders.API_SECRET_KEY,
			process.env.NEXT_PUBLIC_API_SECRET_KEY ?? '',
		);
		return headers;
	},
});

const apiSlice = createApi({
	reducerPath: 'api',
	baseQuery: async (args, api, extraOptions) => {
		let result: any = await baseQuery(args, api, extraOptions);
		if (result?.error?.status === 401) {
			const session = await fetchSession(
				AuthErrorEnum.FORCE_REFRESH_QUERY_PARAM + '=true',
			);
			if (session?.accessToken) {
				result = await baseQuery(args, api, extraOptions);
			} else {
				await logoutHandler();
			}
		}
		return { ...result, data: result?.data?.data };
	},
	tagTypes: ['Options'],
	endpoints: () => ({}),
});

export default apiSlice;
