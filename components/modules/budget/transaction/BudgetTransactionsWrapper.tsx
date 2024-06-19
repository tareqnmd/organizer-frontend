import { BudgetTransactionParamType } from '@/types/modules/budget/budget-transaction-types';
import { ReactNode } from 'react';
import BudgetTransactionAdd from './BudgetTransactionAdd';
import BudgetTransactionFilter from './BudgetTransactionFilter';
import BudgetTransactionPagination from './BudgetTransactionPagination';

const BudgetTransactionsWrapper = ({
	children,
	searchOptions,
}: {
	children: ReactNode;
	searchOptions: BudgetTransactionParamType;
}) => {
	return (
		<div className="grid gap-4">
			<div className="grid grid-cols-4 gap-2">
				<BudgetTransactionFilter searchParams={searchOptions} />
				<BudgetTransactionAdd />
			</div>
			{children}
			<BudgetTransactionPagination />
		</div>
	);
};

export default BudgetTransactionsWrapper;
