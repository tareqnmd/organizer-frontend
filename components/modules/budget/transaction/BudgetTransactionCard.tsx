import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { BudgetTransactionType } from '@/types/modules/budget/budget-transaction-types';
import Link from 'next/link';

const BudgetTransactionCard = ({
	transaction,
}: {
	transaction: BudgetTransactionType;
}) => {
	return (
		<Link href={`/note/${transaction.id}`}>
			<Card className="h-full hover:shadow transition overflow-hidden">
				<CardHeader className="p-2 border-b bg-gray-200">
					<CardTitle className="text-md w-full flex justify-between">
						<span>
							{transaction.categoryName}({transaction.typeName})
						</span>
					</CardTitle>
					<CardDescription className="!m-0 text-gray-900">
						{transaction?.amount}
					</CardDescription>
				</CardHeader>
				<CardContent className="p-2">
					<div
						dangerouslySetInnerHTML={{ __html: transaction?.description }}
						className="truncate max-h-10"
					/>
				</CardContent>
			</Card>
		</Link>
	);
};

export default BudgetTransactionCard;
