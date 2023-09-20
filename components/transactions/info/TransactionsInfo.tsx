'use client';
import { getTransactionsState } from '@/features/transactions/transactions-slice';
import { useSelector } from 'react-redux';
import TransactionFilter from './TransactionFilter';
const TransactionsInfo = () => {
	const { filterType, filterTime } = useSelector(getTransactionsState);
	return (
		<TransactionFilter
			filterType={filterType}
			filterTime={filterTime}
		/>
	);
};

export default TransactionsInfo;
