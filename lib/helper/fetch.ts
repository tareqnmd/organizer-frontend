import axios from 'axios';
import { getCookie, getCookieValue } from './server-func';

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
