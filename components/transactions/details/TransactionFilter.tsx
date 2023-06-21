import {
	setFilterTime,
	setFilterType,
} from '@/features/transactions/transactions-slice';
import { useDispatch } from 'react-redux';
import styles from './TransactionFilter.module.scss';

const getActiveFilter = (filter: string, name: string) => filter === name;

const getFilterClass = (filter: string, name: string) =>
	`${styles['transaction-filter-btn']} ${
		getActiveFilter(filter, name) ? styles['active'] : ''
	}`;

const TransactionFilter = ({
	filterTime,
	filterType,
}: {
	filterType: string;
	filterTime: string;
}) => {
	const dispatch = useDispatch();
	const filterTypeHandler = (type: string) => {
		dispatch(setFilterType(type));
	};
	const filterTimeHandler = (type: string) => {
		dispatch(setFilterTime(type));
	};

	return (
		<div className={styles['transaction-filter']}>
			<div className={styles['transaction-filter-btns']}>
				<button
					onClick={() => filterTimeHandler('all')}
					className={getFilterClass(filterTime, 'all')}
				>
					All
				</button>
				<button
					onClick={() => filterTimeHandler('month')}
					className={getFilterClass(filterTime, 'month')}
				>
					Current Month
				</button>
				<button
					onClick={() => filterTimeHandler('week')}
					className={getFilterClass(filterTime, 'week')}
				>
					Current Week
				</button>
			</div>
			<div className={styles['transaction-filter-btns']}>
				<button
					onClick={() => filterTypeHandler('all')}
					className={getFilterClass(filterType, 'all')}
				>
					All
				</button>
				<button
					onClick={() => filterTypeHandler('income')}
					className={getFilterClass(filterType, 'income')}
				>
					Income
				</button>
				<button
					onClick={() => filterTypeHandler('expense')}
					className={getFilterClass(filterType, 'expense')}
				>
					Expense
				</button>
			</div>
		</div>
	);
};

export default TransactionFilter;
