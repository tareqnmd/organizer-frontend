export type BudgetCategoryType = {
	id: string;
	typeId: string;
	name: string;
	type: string;
	status: number;
};

export type BudgetCategoriesType = BudgetCategoryType[];

export type BudgetCategoryParamType = { category?: string; type: string };
