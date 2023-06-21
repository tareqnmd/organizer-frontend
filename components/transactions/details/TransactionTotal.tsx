import { totalTransactionAmount } from '@/utils/helpers/transaction-helper';
import { ITransactions } from '@/utils/types/transaction-types';
import styles from './TransactionFilter.module.scss';

const TransactionTotal = ({
	transactions,
}: {
	transactions: ITransactions;
}) => {
	return (
		<div className={styles['transaction-card']}>
			{totalTransactionAmount(transactions)}
		</div>
	);
};

export default TransactionTotal;
