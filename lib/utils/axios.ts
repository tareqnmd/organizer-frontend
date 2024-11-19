import { logoutHandler } from '@/lib/utils';
import axios from 'axios';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth-options';

export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true,
});

axiosInstance.interceptors.request.use(
	async (config) => {
		try {
			const session = await getServerSession(authOptions);
			if (session?.accessToken) {
				config.headers['Authorization'] = session.accessToken;
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
