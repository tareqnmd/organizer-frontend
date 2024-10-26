import { TransactionTypeEnum } from './enums';

export type TransactionType = TransactionTypeEnum;

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
	from: string;
	to: string;
	page?: string;
	perPage?: string;
};

export type BudgetCategoryType = {
	id: string;
	typeId: string;
	name: string;
	type: string;
	status: number;
};

export type BudgetCategoriesType = BudgetCategoryType[];

export type BudgetCategoryParamType = { category?: string; type: string };

export type BudgetTypeType = {
	id: string;
	name: string;
	status: number;
};
export type BudgetTypeSubmitType = {
	name: string;
	id?: string;
};

export type TimeFrame = 'month' | 'year';
export type Period = { year: number; month: number };
