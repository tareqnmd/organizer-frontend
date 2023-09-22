'use client';
import {
	getTransactionsState,
	setFilterType,
} from '@/features/transactions/transactions-slice';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TransactionFilter.module.scss';

const getActiveFilter = (filter: string, name: string) => filter === name;

const getFilterClass = (filter: string, name: string) =>
	`${styles['transaction-filter-btn']} ${
		getActiveFilter(filter, name) ? styles['active'] : ''
	}`;

const TransactionFilter = () => {
	const { filterType } = useSelector(getTransactionsState);

	const dispatch = useDispatch();
	const filterTypeHandler = (type: string) => {
		dispatch(setFilterType(type));
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