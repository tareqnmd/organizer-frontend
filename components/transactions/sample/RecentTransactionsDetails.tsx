import {
	getColumnData,
	transactionTableColumns,
} from '@/utils/helpers/transaction-helper';
import { ITransaction, ITransactions } from '@/utils/types/transaction-types';
import Link from 'next/link';
import styles from './TransactionSamples.module.scss';

const RecentTransactionsDetails = ({
	transactions,
}: {
	transactions: ITransactions;
}) => {
	return (
		<section>
			<div className="flex items-center justify-between mb-2">
				<span className="text-xl font-bold">Recent Transactions</span>
				<Link
					className="underline"
					href="/transactions"
				>
					See More
				</Link>
			</div>
			{transactions?.length && transactionTableColumns?.length ? (
				<table className={`${styles['transaction-table']}`}>
					<thead>
						<tr>
							{transactionTableColumns?.map((title) => (
								<th key={title.dataIndex}>{title.title}</th>
							))}
						</tr>
					</thead>
					<tbody>
						{transactions.map((transaction: ITransaction) => (
							<tr
								className={styles[transaction?.type]}
								key={transaction._id}
							>
								{transactionTableColumns?.map((title) => (
									<td key={title.dataIndex}>
										{getColumnData(transaction, title)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			) : null}
		</section>
	);
};

export default RecentTransactionsDetails;
