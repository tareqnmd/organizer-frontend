export type BudgetTransactionType = {
	id: string;
	categoryName: string;
	categoryId: string;
	typeName: string;
	typeId: string;
	date: Date;
	amount: number;
	description: string;
	status: number;
};

export type BudgetTransactionsType = BudgetTransactionType[];

export type BudgetTransactionParamType = {
	type?: string;
	category?: string;
	transaction?: string;
	dateRange?: { from: Date; to: Date };
};
