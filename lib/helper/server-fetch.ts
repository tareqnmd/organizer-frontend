import { redirect } from 'next/navigation';
import { getCookie } from './server-func';

export const nextProperties = ({ revalidate = 0 }) => {
	return { next: { revalidate } };
};

export const serverAuthFetch = async (url: string, next_options = {}) => {
	const baseURL = process.env.NEXT_PUBLIC_API_URL;
	const path = `${baseURL}/${url}`;
	return fetch(path, {
		headers: { cookie: await getCookie() },
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
	}
) => {
	try {
		const res = await serverAuthFetch(url, options);
		if (res?.status !== 401) {
			throw new Error('Unauthorized');
		}
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		const data = await res.json();
		return data;
	} catch (error: any) {
		if (error?.message === 'Unauthorized') {
			redirect('/unauthorized');
		}
		return error?.message ?? 'Error Found';
	}
};
