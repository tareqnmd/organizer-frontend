import axios from 'axios';
import { type ClassValue, clsx } from 'clsx';
import { signOut } from 'next-auth/react';
import { twMerge } from 'tailwind-merge';

export async function fetchSession(queryParamString?: string) {
	try {
		const { data: session } = await axios.get(
			'/api/auth/session' +
				(queryParamString ? '?' + queryParamString : ''),
		);
		if (Object.keys(session).length) {
			return session;
		}
		return null;
	} catch (error) {
		return null;
	}
}

export function clearAllCookies() {
	const cookies = document.cookie?.split('; ');
	for (const cookie of cookies) {
		const [name, _] = cookie?.split('=');
		document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
	}
}

export const logoutHandler = async () => {
	try {
		await signOut({
			callbackUrl: `${window.location.origin}/login`,
		});
	} catch (error) {}
};

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getError = (error: any, defaultMessage = 'Error Found') => {
	return typeof error === 'string'
		? error
		: (error?.data?.message ?? error?.message ?? defaultMessage);
};
export const toQueryString = (
	obj: Record<string, string | number | boolean | null | undefined>,
) => {
	const filteredObj = Object.fromEntries(
		Object.entries(obj).filter(
			([_, value]) =>
				value !== '' && value !== null && value !== undefined,
		),
	);
	const encodedKeyValuePairs = Object.entries(filteredObj).map(
		([key, value]) => {
			return `${encodeURIComponent(key)}=${encodeURIComponent(String(value))}`;
		},
	);
	return `?${encodedKeyValuePairs.join('&')}`;
};
export const moneyFormat = (amount: number, currency = 'USD', type = 'en-US') =>
	new Intl.NumberFormat(type, {
		style: 'currency',
		currency,
	}).format(amount);

export const getPageNumbers = (totalTransactions: number, perPage: number) => {
	const totalPages = Math.ceil(totalTransactions / perPage);
	const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);
	return pageNumbers;
};

export const Currencies = [
	{ value: 'BDT', label: '৳ Taka', locale: 'en-US' },
	{ value: 'USD', label: '$ Dollar', locale: 'en-US' },
];

export function GetFormatterForCurrency(currency: string) {
	const locale = Currencies.find((c) => c.value === currency)?.locale;
	return new Intl.NumberFormat(locale, {
		style: 'currency',
		currency,
	});
}

export const getMonths = () => {
	return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((month) => {
		return new Date(2024, month, 1).toLocaleString('default', {
			month: 'long',
		});
	});
};

export const getYears = () => {
	const currentYear = new Date().getFullYear();
	return Array.from({ length: 20 }, (_, i) => currentYear + 10 - i);
};
