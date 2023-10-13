'use client';
import { setTransactions } from '@/features/hisab/transactions/slice';
import { ITransactions } from '@/utils/types/hisab/transaction-types';
import { useDispatch } from 'react-redux';
import TransactionButton from './buttons/TransactionButton';
import TransactionsInfo from './info/TransactionsInfo';
import TransactionTable from './table/TransactionTable';

const TransactionsDetails = ({
	transactions,
}: {
	transactions: ITransactions;
}) => {
	const dispatch = useDispatch();
	dispatch(setTransactions(transactions));
	return (
		<>
			<TransactionsInfo />
			<div className="flex items-end justify-between border-b-2 border-stone-950 mb-2 pb-2">
				<h3 className="font-semibold text-lg">Transactions</h3>
				<TransactionButton />
			</div>
			<TransactionTable />
		</>
	);
};

export default TransactionsDetails;
