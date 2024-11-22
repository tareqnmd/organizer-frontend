import { getServerSession } from 'next-auth';
import { authOptions } from '../auth-options';
import { AuthErrorEnum } from '../helper/auth';
import { fetchSession, logoutHandler } from './common';

export const nextProperties = ({ revalidate = 0 }) => {
	return { next: { revalidate } };
};

export const serverAuthFetch = async (url: string, next_options = {}) => {
	const baseURL = process.env.NEXT_PUBLIC_API_URL;
	const path = `${baseURL}/${url}`;
	const session = await getServerSession(authOptions());
	return fetch(path, {
		headers: session?.accessToken
			? { Authorization: session.accessToken }
			: undefined,
		...next_options,
	});
};

export const baseFetch = (url: string, next_options = {}) => {
	const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
	const path = `${baseURL}/${url}`;
	return fetch(path, {
		...next_options,
	});
};

export const generateDataFromServer = async (
	url: string,
	options?: {
		next: { revalidate: number };
	},
) => {
	try {
		let res = await serverAuthFetch(url, options);
		if (res?.status === 401) {
			const session = await fetchSession(
				AuthErrorEnum.FORCE_REFRESH_QUERY_PARAM + '=true',
			);
			if (session?.accessToken) {
				res = await serverAuthFetch(url, options);
			} else {
				await logoutHandler();
			}
		}
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		const data = await res.json();
		return data;
	} catch (error: unknown) {
		if (error instanceof Error) {
			return error.message;
		}
		return 'Error Found';
	}
};
