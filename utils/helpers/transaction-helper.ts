import { ITransaction, ITransactions } from '../types/transaction-types';
import { millionNumberFormat } from './index';

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
	return millionNumberFormat(totalAmount, 'amount');
};

export const incomeTransactionAmount = (transactions: ITransactions) => {
	const totalAmount = transactions?.reduce(
		(acc: number, transaction: ITransaction) =>
			acc + (transaction.type === 'Income' ? transaction.amount : 0),
		0
	);
	return millionNumberFormat(totalAmount, 'amount');
};

export const expenseTransactionAmount = (transactions: ITransactions) => {
	const totalAmount = transactions?.reduce(
		(acc: number, transaction: ITransaction) =>
			acc + (transaction.type === 'Expense' ? transaction.amount : 0),
		0
	);
	return millionNumberFormat(totalAmount, 'amount');
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

	return timeFiltered.map((item) => ({
		...item,
		extra_class: item?.type === 'Expense' ? '!bg-[#CD181850]' : '',
	}));
};

export const transactionTableColumns = [
	{ title: 'Date', dataIndex: 'date', type: 'date' },
	{ title: 'Type', dataIndex: 'typeName', type: 'text' },
	{ title: 'Amount', dataIndex: 'amount', type: 'amount' },
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
