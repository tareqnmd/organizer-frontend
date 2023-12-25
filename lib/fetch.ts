// import { headers } from 'next/dist/client/components/headers';

import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const authFetch = (url: string, next_options = {}) => {
	const baseURL = process.env.NEXT_PUBLIC_API_URL;
	const path = `${baseURL}/${url}`;
	// const headersList = headers();
	// const cookie: any = headersList.get('cookie');
	// return fetch(path, {
	// 	headers: { cookie },
	// 	...next_options,
	// });
	return fetch(path);
};

export const baseFetch = (url: string, next_options = {}) => {
	const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
	const path = `${baseURL}/${url}`;
	return fetch(path, {
		...next_options,
	});
};
