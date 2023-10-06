export interface ITransactionsStore {
	transactions: ITransaction[];
	filterType: string;
	filter: string;
}
export interface ITransaction {
	_id: string;
	date: Date;
	name: string;
	type: string;
	typeName: string;
	typeId: string;
	amount: number;
	details: string;
}

export type ITransactions = ITransaction[];
export interface ITransactionTitle {
	dataIndex: string;
	type: string;
	title: string;
}
export interface TransactionTypeOptionType {
	_id: string;
	name: string;
}

export interface ITransactionsOverview {
	totalTransactions: number;
	currentAmount: number;
	incomeTransactions: number;
	incomeTransactionsAmount: number;
	expenseTransactions: number;
	expenseTransactionsAmount: number;
}
