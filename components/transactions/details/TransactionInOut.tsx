import {
	expenseTransactionAmount,
	incomeTransactionAmount,
} from '@/utils/helpers/transaction-helper';
import { ITransactions } from '@/utils/types/transaction-types';
import styles from './TransactionFilter.module.scss';

const TransactionInOut = ({
	transactions,
}: {
	transactions: ITransactions;
}) => {
	return (
		<div className={styles['transaction-cards']}>
			<div className={styles['transaction-card']}>
				{incomeTransactionAmount(transactions)}
			</div>
			<div className={styles['transaction-card']}>
				{expenseTransactionAmount(transactions)}
			</div>
		</div>
	);
};

export default TransactionInOut;
