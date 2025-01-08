import { FileText } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
	BudgetTransactionParamType,
	getBudgetTransactionQueryParams,
} from '@/lib/helper/budget';
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
	return (
		<PDFDownloadLink
			document={<BudgetTransactionsPdf transactions={transactions} />}
			fileName={`Transactions_${filterData?.from}_${filterData?.to}`}
			className="col-span-3 h-8 w-full items-center gap-1 md:col-span-2"
		>
			<Button className="flex h-8 w-full items-center gap-1">
				<FileText className="h-4 w-4 shrink-0" />
				Download PDF
			</Button>
		</PDFDownloadLink>
	);
};

export default BudgetTransactionsPdfButton;
