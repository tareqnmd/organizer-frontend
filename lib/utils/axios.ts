import axios, { AxiosRequestConfig } from 'axios';
import { getSession } from 'next-auth/react';
import { AuthErrorEnum } from '../helper/auth/enums';
import { CommonHeaders } from '../helper/shared/enum';
import { fetchSession, logoutHandler } from './common';
const secretKey = process.env.NEXT_PUBLIC_API_SECRET_KEY;

export const baseAxiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true,
});

baseAxiosInstance.interceptors.request.use(async (config) => {
	if (secretKey) {
		config.headers[CommonHeaders.API_SECRET_KEY] = secretKey;
	}
	return config;
});

export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_API_URL,
	withCredentials: true,
});

axiosInstance.interceptors.request.use(
	async (config) => {
		try {
			const session = await getSession();
			if (session?.accessToken) {
				config.headers[CommonHeaders.AUTHORIZATION] =
					session.accessToken;
			}
			if (secretKey) {
				config.headers[CommonHeaders.API_SECRET_KEY] = secretKey;
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
				axiosInstance.defaults.headers[CommonHeaders.AUTHORIZATION] =
					session?.accessToken;
				return axiosInstance(error.config as AxiosRequestConfig);
			} else {
				await logoutHandler();
			}
		}
		return Promise.reject(error?.response?.data);
	},
);
