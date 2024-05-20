import { authOptions } from '@/lib/auth-options';
import { authFetch } from '@/lib/fetch';
import {
	BudgetTransactionParamType,
	BudgetTransactionType,
} from '@/types/modules/budget/budget-transaction-types';
import { getServerSession } from 'next-auth';
import BudgetTransactionAction from './BudgetTransactionAction';
import BudgetTransactionAdd from './BudgetTransactionAdd';
import BudgetTransactionCard from './BudgetTransactionCard';

const getTransactions = async (params: BudgetTransactionParamType) => {
	try {
		const queryParams = new URLSearchParams(params);
		const res = await authFetch(`budget/transactions?${queryParams}`);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log('error', error);
	}
};

const Transactions = async ({
	searchOptions,
}: {
	searchOptions: BudgetTransactionParamType;
}) => {
	const transactions = await getTransactions(searchOptions);
	const session = await getServerSession(authOptions);
	return (
		<>
			<div className="flex items-center justify-end gap-2 mb-4">
				<BudgetTransactionAction params={searchOptions} />
				{session?.user?.role === 'admin' && <BudgetTransactionAdd />}
			</div>
			<div
				className="grid grid-cols-1 sm:grid-cols-2
			 lg:grid-cols-3 xl:grid-cols-4 gap-2"
			>
				{transactions?.map((transaction: BudgetTransactionType) => (
					<BudgetTransactionCard
						key={transaction.id}
						transaction={transaction}
					/>
				))}
			</div>
		</>
	);
};

export default Transactions;
