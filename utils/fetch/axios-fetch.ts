import { axiosInstance } from './axios-instance';

export const fetchData = async (url: string) => {
	return axiosInstance.get(url);
};
