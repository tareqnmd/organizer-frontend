import axios, { AxiosRequestConfig } from 'axios';
import { getServerSession } from 'next-auth';
import { authOptions } from '../auth-options';
import { AuthErrorEnum } from '../helper/auth/enums';
import { fetchSession, logoutHandler } from './common';

export const baseAxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true,
});

export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true,
});

axiosInstance.interceptors.request.use(
	async (config) => {
		try {
			const session = await getServerSession(authOptions());
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
		return await res.data;
	},
	async (error) => {
		if (error?.response?.data?.statusCode === 401) {
			const session = await fetchSession(
				AuthErrorEnum.FORCE_REFRESH_QUERY_PARAM + '=true',
			);
			if (session?.accessToken) {
				axiosInstance.defaults.headers['Authorization'] =
					session?.accessToken;
				return axiosInstance(error.config as AxiosRequestConfig);
			} else {
				await logoutHandler();
			}
		}
		return Promise.reject(error?.response?.data);
	},
);
