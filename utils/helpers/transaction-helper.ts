import dayjs from 'dayjs';
import {
	ITransaction,
	ITransactionTitle,
	ITransactions,
} from '../types/transaction-types';

export const getColumnData = (
	transaction: ITransaction,
	title: ITransactionTitle
) => {
	const dataIndex = title.dataIndex;
	const value: any = transaction[dataIndex as keyof ITransaction];
	const modifiedValue =
		title.type === 'number'
			? millionNumberFormat(value)
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
	currency = 'BDT',
	format = 'en-US'
) => {
	const number = amount ? Number(amount.toFixed(2)) : 0;
	const result = Intl.NumberFormat(format).format(number);
	return `${result} ${currency}`;
};

export const totalTransactionAmount = (transactions: ITransactions) => {
	const totalAmount = transactions?.reduce(
		(acc: number, transaction: ITransaction) =>
			acc +
			(transaction.type === 'Income'
				? transaction.amount
				: transaction.type === 'Expense'
				? -transaction.amount
				: 0),
		0
	);
	return millionNumberFormat(totalAmount);
};

export const incomeTransactionAmount = (transactions: ITransactions) => {
	const totalAmount = transactions?.reduce(
		(acc: number, transaction: ITransaction) =>
			acc + (transaction.type === 'Income' ? transaction.amount : 0),
		0
	);
	return millionNumberFormat(totalAmount);
};

export const expenseTransactionAmount = (transactions: ITransactions) => {
	const totalAmount = transactions?.reduce(
		(acc: number, transaction: ITransaction) =>
			acc + (transaction.type === 'Expense' ? transaction.amount : 0),
		0
	);
	return millionNumberFormat(totalAmount);
};

const monthEqual = (transaction: ITransaction) =>
	new Date(transaction.date).getMonth() === new Date().getMonth();

const getWeek = (date: Date) => {
	const currentDate: any = new Date();
	const transactionDate: any = new Date(date);

	const currentYear: any = new Date(currentDate.getFullYear(), 0, 1);
	const transactionYear: any = new Date(transactionDate.getFullYear(), 0, 1);

	const currentDays = Math.floor(
		(currentDate - currentYear) / (24 * 60 * 60 * 1000)
	);
	const transactionDays = Math.floor(
		(transactionDate - transactionYear) / (24 * 60 * 60 * 1000)
	);

	const currentWeek = Math.ceil((new Date().getDay() + 1 + currentDays) / 7);
	const transactionWeek = Math.ceil(
		(new Date().getDay() + 1 + transactionDays) / 7
	);

	return currentWeek === transactionWeek;
};

export const getFilteredTransactionType = (
	transactions: ITransactions,
	time: string,
	type: string
) => {
	const typeFiltered =
		type === 'all'
			? transactions
			: transactions?.filter(
					(transaction: ITransaction) =>
						transaction.type ===
						(type === 'income' ? 'Income' : 'Expense')
			  );
	const timeFiltered =
		time === 'all'
			? typeFiltered
			: typeFiltered?.filter((transaction: ITransaction) =>
					time === 'month'
						? monthEqual(transaction)
						: getWeek(transaction.date)
			  );

	return timeFiltered;
};

export const transactionTableColumns = [
	{ title: 'Date', dataIndex: 'date', type: 'date' },
	{ title: 'Type', dataIndex: 'type', type: 'text' },
	{ title: 'Amount', dataIndex: 'amount', type: 'number' },
	{ title: 'Description', dataIndex: 'description', type: 'text' },
];

export const transactionFormInputs = [
	{
		name: 'typeId',
		label: 'Transaction Type',
		type: 'select',
		url: 'type',
		required: true,
	},
	{
		name: 'date',
		label: 'Transaction Date',
		type: 'date',
		required: true,
	},
	{
		name: 'amount',
		label: 'Transaction Amount',
		type: 'number',
		required: true,
		placeholder: 'Amount',
	},
	{
		name: 'description',
		label: 'Transaction Description',
		type: 'textarea',
		rows: 4,
		placeholder: 'Description',
		required: true,
	},
];
