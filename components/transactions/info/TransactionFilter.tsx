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
		<div>
			<div className={styles['type-filter']}>
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
