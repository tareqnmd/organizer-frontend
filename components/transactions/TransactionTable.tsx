'use client';
import { getTransactionsState } from '@/features/transactions/transactions-slice';
import {
	getColumnData,
	getFilteredTransactionType,
	transactionTableColumns,
} from '@/utils/helpers/transaction-helper';
import { ITransaction } from '@/utils/types/transaction-types';
import { useSelector } from 'react-redux';
import styles from './TransactionTable.module.scss';

const TransactionTable = () => {
	const { transactions, filterTime, filterType } =
		useSelector(getTransactionsState);
	return (
		<>
			{transactions?.length && transactionTableColumns?.length && (
				<table className={`${styles['transaction-table']}`}>
					<thead>
						<tr>
							{transactionTableColumns?.map((title) => (
								<th key={title.dataIndex}>{title.title}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{getFilteredTransactionType(
							transactions,
							filterTime,
							filterType
						)?.map((transaction: ITransaction) => (
							<tr key={transaction._id}>
								{transactionTableColumns?.map((title) => (
									<td key={title.dataIndex}>
										{getColumnData(transaction, title)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			)}
		</>
	);
};

export default TransactionTable;
