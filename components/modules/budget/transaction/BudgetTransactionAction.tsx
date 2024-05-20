import { BudgetTransactionType } from '@/types/modules/budget/budget-transaction-types';
import BudgetTransactionEdit from './BudgetTransactionEdit';
import BudgetTransactionDelete from './BudgetTransactionDelete';
import BudgetTransactionStatus from './BudgetTransactionStatus';

const BudgetTransactionAction = ({
	transaction,
}: {
	transaction: BudgetTransactionType;
}) => {
	return (
		<div className="flex items-center gap-1">
			{transaction.status === 1 ? (
				<BudgetTransactionEdit transaction={transaction} />
			) : null}
			<BudgetTransactionDelete transaction={transaction} />
			<BudgetTransactionStatus transaction={transaction} />
		</div>
	);
};

export default BudgetTransactionAction;
