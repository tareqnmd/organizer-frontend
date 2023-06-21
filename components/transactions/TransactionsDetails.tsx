'use client';
import { setTransactions } from '@/features/transactions/transactions-slice';
import { ITransactions } from '@/utils/types/transaction-types';
import { useDispatch } from 'react-redux';
import TransactionTable from './TransactionTable';
import TransactionsInfo from './details/TransactionsInfo';

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
			<TransactionTable />
		</>
	);
};

export default TransactionsDetails;
