export interface ITransactionsStore {
	transactions: ITransaction[];
	filterTime: string;
	filterType: string;
}

export interface ITransactions {}
[];

export interface ITransaction {
	_id: string;
	date: Date;
	name: string;
	type: string;
	amount: number;
	details: string;
}

export interface ITransactionTitle {
	dataIndex: string;
	type: string;
	title: string;
}
export interface TransactionTypeOptionType {
	_id: string;
	name: string;
}
