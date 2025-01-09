import { FileText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	BudgetTransactionParamType,
	BudgetTransactionType,
	getBudgetTransactionQueryParams,
} from '@/lib/helper/budget';
import { cn } from '@/lib/utils';
import { useGetBudgetTransactionsQuery } from '@/store/features/budget/transaction/api';
import { PDFDownloadLink } from '@react-pdf/renderer';
import BudgetTransactionsPdf from './BudgetTransactionsPdf';

const BudgetTransactionsPdfButton = ({
	filterData,
}: {
	filterData: BudgetTransactionParamType;
}) => {
	const { data: transactions = [] } = useGetBudgetTransactionsQuery(
		getBudgetTransactionQueryParams({
			...filterData,
			page: '1',
			perPage: '100',
		}),
	);
	return transactions.length ? (
		<PDFDownloadLink
			document={
				<BudgetTransactionsPdf
					transactions={transactions.filter(
						(t: BudgetTransactionType) =>
							['Expense', 'Income'].includes(t.typeName),
					)}
					subHeader={`Budget Transactions From ${filterData?.from} To ${filterData?.to}`}
				/>
			}
			fileName={`Transactions_${filterData?.from}_${filterData?.to}`}
			className="col-span-3 h-8 w-full items-center gap-1 md:col-span-2"
		>
			<Button className={cn('flex h-8 w-full items-center gap-1')}>
				<FileText className="h-4 w-4 shrink-0" />
				Download PDF
			</Button>
		</PDFDownloadLink>
	) : null;
};

export default BudgetTransactionsPdfButton;
