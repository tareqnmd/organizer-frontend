'use server';

import { cookies } from 'next/headers';

export const clearCookie = async () => {
	cookies().delete('token');
};
