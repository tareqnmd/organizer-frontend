import { headers } from 'next/dist/client/components/headers';

export const basicFetchData = (url: string, next_options = {}) => {
	const baseURL = 'https://m32tapi.tareqnmd.com';
	const path = `${baseURL}/${url}`;
	const headersList = headers();
	const cookie: any = headersList.get('cookie');
	return fetch(path, {
		headers: { cookie },
		...next_options,
	});
};
