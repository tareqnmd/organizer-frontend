import { getCookieValue, logoutHandler } from '@/lib/utils';
import axios from 'axios';

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
	},
);

axiosInstance.interceptors.response.use(
	async (res) => {
		if (res?.data?.statusCode === 401) {
			await logoutHandler();
		}
		return await res.data;
	},
	async (error) => {
		if (error?.response?.data?.statusCode === 401) {
			await logoutHandler();
		}
		return Promise.reject(error?.response?.data);
	},
);
