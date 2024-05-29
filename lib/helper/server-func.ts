'use server';

import { revalidateTag } from 'next/cache';
import { cookies, headers } from 'next/headers';

export const clearCookie = async () => {
	cookies().delete('token');
};

export const getCookie = async () => {
	const headersList = headers();
	const cookie: any = headersList.get('cookie');
	return cookie;
};

export const getCookieValue = async (name: string) => {
	const cookieStore = cookies();
	const cookie: any = cookieStore.get(name);
	return cookie.value ?? '';
};

export const notesRevalidate = () => {
	revalidateTag('collection');
};
