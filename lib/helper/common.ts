export const getError = (error: any, defaultMessage = 'Error Found') => {
	return error?.data?.message ?? defaultMessage;
};
export const toQueryString = (obj: any) => {
	const filteredObj = Object.fromEntries(
		Object.entries(obj).filter(([_, value]) => value !== '')
	);
	const encodedKeyValuePairs = Object.entries(filteredObj).map(
		([key, value]: any) => {
			return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
		}
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
