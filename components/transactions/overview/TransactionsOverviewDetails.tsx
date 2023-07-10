import { millionNumberFormat } from '@/utils/helpers/transaction-helper';
import { ITransactionsOverview } from '@/utils/types/transaction-types';
import styles from './TransactionsOverviewDetails.module.scss';

const TransactionsOverviewDetails = ({
	transactionsOverview,
}: {
	transactionsOverview: ITransactionsOverview;
}) => {
	return (
		<section className={styles['transaction-overview']}>
			<div>
				<span>Total Transactions</span>
				<span>{transactionsOverview?.totalTransactions}</span>
			</div>
			<div>
				<span>Income Transactions</span>
				<span>{transactionsOverview?.incomeTransactions}</span>
			</div>
			<div>
				<span>Expense Transactions</span>
				<span>{transactionsOverview?.expenseTransactions}</span>
			</div>
			<div>
				<span>Total Amount</span>
				<span>
					{millionNumberFormat(transactionsOverview?.currentAmount)}
				</span>
			</div>
			<div>
				<span>Income Amount</span>
				<span>
					{millionNumberFormat(
						transactionsOverview?.incomeTransactionsAmount
					)}
				</span>
			</div>
			<div>
				<span>Expense Amount</span>
				<span>
					{millionNumberFormat(
						transactionsOverview?.expenseTransactionsAmount
					)}
				</span>
			</div>
		</section>
	);
};

export default TransactionsOverviewDetails;
