import { format } from 'date-fns';
import { GridColumnProp } from './common-types';

export const getFieldValue = (item: any, column: GridColumnProp) => {
	const dataIndex = column.dataIndex;
	const modifiedValue =
		column.type === 'number'
			? millionNumberFormat(item[dataIndex])
			: column.type === 'date'
			? dateFormat(item[dataIndex])
			: item[dataIndex];
	return modifiedValue;
};

export const dateFormat = (date: Date) => {
	return format(new Date(date), 'dd-MM-yyyy');
};

export const millionNumberFormat = (
	amount: number,
	currency = 'BDT',
	format = 'en-US'
) => {
	const number = amount ? Number(amount.toFixed(2)) : 0;
	const result = Intl.NumberFormat(format).format(number);
	return `${result} ${currency}`;
};

export const getTotal = (data: { type: string; amount: number }[]) => {
	return data?.reduce(
		(acc, item) =>
			acc +
			(item.type === 'Income'
				? item.amount
				: item.type === 'Expense'
				? -item.amount
				: 0),
		0
	);
};

export const homeCardName = (name: string) => {
	return name === 'currentAmount'
		? 'Current Amount'
		: name === 'totalIncome'
		? 'Total Income'
		: name === 'totalExpense'
		? 'Total Expense'
		: name;
};

