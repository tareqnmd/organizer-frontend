import axios from 'axios';
import { getCookie } from './server-func';

export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const authFetch = async (url: string, next_options = {}) => {
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
