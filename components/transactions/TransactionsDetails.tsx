'use client';
import ModalButtons from '@/components/transactions/buttons/TransactionButton';
import TransactionsInfo from '@/components/transactions/info/TransactionsInfo';
import TransactionTable from '@/components/transactions/table/TransactionTable';
import { setTransactions } from '@/features/transactions/transactions-slice';
import { ITransactions } from '@/utils/types/transaction-types';
import { useDispatch } from 'react-redux';

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
			<ModalButtons />
			<TransactionTable />
		</>
	);
};

export default TransactionsDetails;
