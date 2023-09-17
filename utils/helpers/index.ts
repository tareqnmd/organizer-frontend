import dayjs from 'dayjs';

export const getError = (error: any, defaultMessage = 'Error Found') => {
	return error?.data?.message ?? defaultMessage;
};

export const getColumnData = (transaction: any, title: any) => {
	const dataIndex = title.dataIndex;
	const value: any = transaction[dataIndex as keyof any];
	const modifiedValue =
		title.type === 'number' || title.type === 'amount'
			? millionNumberFormat(value, title.type)
			: title.type === 'date'
			? dateFormat(value)
			: value;
	return modifiedValue;
};

export const dateFormat = (date: Date) => {
	return dayjs(date).format('DD-MM-YYYY');
};

export const dateInputFormat = (date: Date) => {
	return dayjs(date).format('YYYY-MM-DD');
};

export const millionNumberFormat = (
	amount: number,
	type: string,
	currency = 'BDT',
	format = 'en-US'
) => {
	const number = amount ? Number(amount.toFixed(2)) : 0;
	const result = Intl.NumberFormat(format).format(number);
	return type === 'amount' ? `${result} ${currency}` : result;
};

export const publicPaths = ['/login', '/register'];
