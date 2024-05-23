import axios from 'axios';
import { getCookie } from './server-func';

export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true,
});

axiosInstance.interceptors.request.use(
	(config) => {
		const authToken = '11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111';
		config.headers['Cookie'] = `auth_token=${authToken}`;
		config.headers['Auth'] = `auth_token=${authToken}`;
		return config;
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
