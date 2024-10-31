import * as z from 'zod';
import { TimeFrameEnum, TransactionTypeEnum } from './enums';
import { BudgetCategorySchema, BudgetTypeSchema } from './schemas';

// Budget Dashboard
export type BudgetDashboardSearchParamsType = {
	page?: string;
	limit?: string;
	from?: string;
	to?: string;
};

// Budget Dashboard Overview
export type BudgetDashboardOverviewCategoryDetailType = {
	name: string;
	amount: number;
	percentage: number;
};

export type BudgetDashboardOverviewAmountType = {
	income: number;
	expense: number;
	balance: number;
};

export type BudgetDashboardOverviewCategoryType = {
	income: BudgetDashboardOverviewCategoryDetailType[];
	expense: BudgetDashboardOverviewCategoryDetailType[];
};

export type BudgetDashboardOverviewType = {
	amount_info: BudgetDashboardOverviewAmountType;
	category: BudgetDashboardOverviewCategoryType;
};

// Budget Dashboard History
export type Period = { year: number; month: number };

export type BudgetDashboardHistoryMonthType = {
	month: number;
	year: number;
};
export type BudgetDashboardHistoryYearType = {
	year: number;
};

export type BudgetDashboardHistoryChartDataType = {
	expense: number;
	income: number;
	month: number;
	year: number;
	day: number;
};

export type BudgetDashboardHistoryType = {
	month: BudgetDashboardHistoryMonthType[];
	year: BudgetDashboardHistoryYearType[];
};

export interface BudgetDashboardHistoryPeriodSelectorPropsType {
	period: Period;
	setPeriod: (period: Period) => void;
	timeFrame: TimeFrameEnum;
	setTimeFrame: (timeFrame: TimeFrameEnum) => void;
	years: number[];
}

export interface BudgetDashboardHistoryTooltipPropsType {
	active: boolean | undefined;
	payload: BudgetDashboardHistoryChartDataType;
	formatter: Intl.NumberFormat;
}

export interface BudgetDashboardHistoryCustomTooltipRowPropsType {
	label: string;
	textColor: string;
	bgColor: string;
	value: number;
	formatter: Intl.NumberFormat;
}

export interface BudgetDashboardHistoryMonthSelectorPropsType {
	period: Period;
	setPeriod: (period: Period) => void;
}

export interface BudgetDashboardHistoryYearSelectorPropsType {
	period: Period;
	setPeriod: (period: Period) => void;
	years: number[];
}

// Budget Type
export type BudgetTypeType = {
	id: string;
	name: string;
	status: number;
};

export type BudgetTypeSchemaType = z.infer<typeof BudgetTypeSchema>;

// Budget Category
export type BudgetCategoryType = {
	id: string;
	typeId: string;
	name: string;
	type: TransactionTypeEnum;
	status: number;
};

export type BudgetCategoryParamType = {
	category?: string;
	type: TransactionTypeEnum;
};

export type BudgetCategorySchemaType = z.infer<typeof BudgetCategorySchema>;

// need check
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
	type?: TransactionTypeEnum;
	category?: string;
	transaction?: string;
	from: string;
	to: string;
	page?: string;
	perPage?: string;
};

export type BudgetCategoriesType = BudgetCategoryType[];
