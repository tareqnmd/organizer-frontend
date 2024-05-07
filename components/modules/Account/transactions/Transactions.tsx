import { authFetch } from '@/lib/fetch';
import TransactionAction from './TransactionAction';
import TransactionSnippet from './TransactionSnippet';

export type TransactionType = {
	_id: string;
	typeId: string;
	type: string;
	typeName: string;
	date: Date;
	amount: number;
	description: string;
	status: number;
};

export type TransactionParamType = { type?: 'Income' | 'Expense' };

const getTransactions = async (params: TransactionParamType) => {
	const queryParams = new URLSearchParams(params);
	const res = await authFetch(`/budget/transactions?${queryParams}`);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
};

const Transactions = async ({
	searchOptions,
}: {
	searchOptions: TransactionParamType;
}) => {
	const transactions = await getTransactions(searchOptions);
	return (
		<>
			<TransactionAction params={searchOptions} />
			<div
				className="grid grid-cols-1 sm:grid-cols-2
			 lg:grid-cols-3 xl:grid-cols-4 gap-2"
			>
				{transactions?.map((transaction: TransactionType) => (
					<TransactionSnippet
						key={transaction._id}
						transaction={transaction}
					/>
				))}
			</div>
		</>
	);
};

export default Transactions;
