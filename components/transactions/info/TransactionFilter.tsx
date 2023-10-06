'use client';
import {
	getTransactionsState,
	setFilter,
	setFilterType,
} from '@/features/transactions/transactions-slice';
import { useGetTypesQuery } from '@/features/type/type-api';
import { useDispatch, useSelector } from 'react-redux';
import styles from './TransactionFilter.module.scss';

const getActiveFilter = (filter: string, name: string) => filter === name;

const getFilterClass = (filter: string, name: string) =>
	`${styles['transaction-filter-btn']} ${
		getActiveFilter(filter, name) ? styles['active'] : ''
	}`;

const TransactionFilter = () => {
	const { filterType } = useSelector(getTransactionsState);
	const { data: types } = useGetTypesQuery({});

	const dispatch = useDispatch();
	const filterTypeHandler = (type: string) => {
		dispatch(setFilterType(type));
	};
	const filterSelectHandler = (value: string) => {
		dispatch(setFilter(value));
	};

	return (
		<div className="flex gap-2">
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
			<select
				className={styles['type-select']}
				onChange={(e) => filterSelectHandler(e.target.value)}
			>
				<option
					selected
					value="all"
				>
					All
				</option>
				{types?.map((type: any) => (
					<option
						key={type._id}
						value={type._id}
					>
						{type.name}
					</option>
				))}
			</select>
		</div>
	);
};

export default TransactionFilter;
