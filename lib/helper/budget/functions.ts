import { BudgetTypeType } from './types';

export const getBudgetTypeClassName = (type: BudgetTypeType) => {
	if (type.status === 0) return 'inactive';
	if (type.name === 'Expense') return 'expense';
	if (type.name === 'Income') return 'income';
	return 'neutral';
};
