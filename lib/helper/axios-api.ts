import axios from 'axios';
import { signOut } from 'next-auth/react';
import { clearCookie, getCookieValue } from './server-func';

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
