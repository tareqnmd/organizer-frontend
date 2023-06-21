import { getTransactionsState } from '@/features/transactions/transactions-slice';
import { getFilteredTransactionType } from '@/utils/helpers/transaction-helper';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import TransactionFilter from './TransactionFilter';
import TransactionInOut from './TransactionInOut';
import TransactionTotal from './TransactionTotal';

const TransactionsInfo = () => {
	const { transactions, filterType, filterTime } =
		useSelector(getTransactionsState);

	const modifiedTransaction = useMemo(() => {
		return getFilteredTransactionType(transactions, filterTime, filterType);
	}, [transactions, filterTime, filterType]);

	return (
		<div className="grid grid-rows-2 grid-cols-12 gap-4 mb-4">
			<div className="row-span-2 col-span-3">
				<TransactionTotal transactions={modifiedTransaction} />
			</div>
			<div className="col-span-9">
				<TransactionFilter
					filterType={filterType}
					filterTime={filterTime}
				/>
			</div>
			<div className="row-span-1 col-span-9">
				<TransactionInOut transactions={modifiedTransaction} />
			</div>
		</div>
	);
};

export default TransactionsInfo;
