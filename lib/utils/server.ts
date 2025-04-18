'use server';

import { revalidateTag } from 'next/cache';
import { cookies, headers } from 'next/headers';

export const getCookie = async () => {
	try {
		const headersList = headers();
		const cookie = headersList.get('cookie');
		return cookie;
	} catch (error) {
		return '';
	}
};

export const getCookieValue = async (name: string) => {
	try {
		const cookieStore = cookies();
		const cookie = cookieStore.get(name);
		return cookie?.value ?? '';
	} catch (error) {
		return '';
	}
};

export const notesRevalidate = () => {
	revalidateTag('collection');
};
