'use server';

import { cookies, headers } from 'next/headers';

export const clearCookie = async () => {
	cookies().delete('token');
};

export const getCookie = async () => {
	const headersList = headers();
	const cookie: any = headersList.get('cookie');
	return cookie;
};
