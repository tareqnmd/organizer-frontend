'use server';

import axios from 'axios';
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

export const getSessionFromNextServer = async (queryParamString?: string) => {
	const response = await axios.get(
		'/api/auth/session' + (queryParamString ? '?' + queryParamString : ''),
	);
	return response;
};
