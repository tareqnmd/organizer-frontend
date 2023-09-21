import { headers } from 'next/dist/client/components/headers';
import { axiosInstance } from './axios-instance';

export const fetchServerData = (url: string, params = {}) => {
	const headersList = headers();
	const cookie = headersList.get('cookie');
	return axiosInstance.get(url, {
		headers: {
			cookie,
		},
		params,
	});
};
