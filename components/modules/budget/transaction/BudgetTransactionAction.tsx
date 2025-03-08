import { BudgetTransactionType } from '@/lib/helper/budget';
import BudgetTransactionDelete from './BudgetTransactionDelete';
import BudgetTransactionDetails from './BudgetTransactionDetails';
import BudgetTransactionEdit from './BudgetTransactionEdit';
import BudgetTransactionStatus from './BudgetTransactionStatus';

const BudgetTransactionAction = ({
	transaction,
}: {
	transaction: BudgetTransactionType;
}) => {
	if (transaction.typeName === 'Saving') {
		return null;
	}
	return (
		<div className="flex items-center gap-1">
			<BudgetTransactionDetails transaction={transaction} />
			{transaction.status === 1 ? (
				<BudgetTransactionEdit transaction={transaction} />
			) : null}
			<BudgetTransactionDelete transaction={transaction} />
			<BudgetTransactionStatus transaction={transaction} />
		</div>
	);
};

export default BudgetTransactionAction;
