import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { BudgetTransactionType } from '@/types/modules/budget/budget-transaction-types';
import BudgetTransactionAction from './BudgetTransactionAction';

const BudgetTransactionCard = ({
	transaction,
}: {
	transaction: BudgetTransactionType;
}) => {
	return (
		<Card className="h-full hover:shadow transition overflow-hidden">
			<CardHeader className="p-2 border-b bg-gray-200">
				<CardTitle className="text-md w-full flex justify-between">
					<span>
						{transaction.categoryName}({transaction.typeName})
					</span>
				</CardTitle>
				<CardDescription className="!m-0 text-gray-900">
					{transaction?.description}
				</CardDescription>
			</CardHeader>
			<CardContent className="p-2">
				{transaction?.amount}
				<BudgetTransactionAction transaction={transaction} />
			</CardContent>
		</Card>
	);
};

export default BudgetTransactionCard;
