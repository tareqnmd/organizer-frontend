import axios from 'axios';
import { signOut } from 'next-auth/react';
import { clearCookie, getCookie, getCookieValue } from './server-func';

export const nextProperties = (revalidate: number) => {
	return { next: { revalidate } };
};

export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true,
});

axiosInstance.interceptors.request.use(
	async (config) => {
		try {
			const authToken = await getCookieValue('token');
			if (authToken) {
				config.headers['Authorization'] = authToken;
			}
			return config;
		} catch (error) {
			return config;
		}
	},
	(error) => {
		return Promise.reject(error);
	}
);

axiosInstance.interceptors.response.use(
	async (res) => {
		if (res?.data?.statusCode === 401) {
			await clearCookie();
			await signOut({
				callbackUrl: `${window.location.origin}/login`,
			});
		}
		return await res.data;
	},
	(error) => {
		return Promise.reject(error);
	}
);

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
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		const data = await res.json();
		return data;
	} catch (error: any) {
		return error?.message ?? 'Error Found';
	}
};
