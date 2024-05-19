export type BudgetCategory = {
	id: string;
	typeId: string;
	name: string;
	type: string;
	status: number;
};
export type BudgetCategories = BudgetCategory[];

export type BudgetCategoryParamType = { category?: string; type: string };
