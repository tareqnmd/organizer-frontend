import { BudgetTransactionParamType } from './types';

export const getBudgetTransactionQueryParams = (
	filterData: BudgetTransactionParamType,
): Record<string, unknown> => {
	const queryParams: Record<string, unknown> = {};
	Object.entries(filterData).forEach(([key, value]) => {
		if (value) queryParams[key] = value;
	});
	return queryParams;
};
