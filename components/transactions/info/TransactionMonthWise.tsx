'use client';
import { useGetTransactionsMutation } from '@/features/transactions/transactions-api';
import { useState } from 'react';
import styles from './TransactionFilter.module.scss';

const getCurrentMonth = () => {
	const date = new Date();
	const year = date.getFullYear();
	const month = String(date.getMonth() + 1).padStart(2, '0');
	return `${year}-${month}`;
};

const TransactionMonthWise = () => {
	const [transactions] = useGetTransactionsMutation();
	const [month, setMonth] = useState(getCurrentMonth());

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value?.split('-')[1] ?? 'all';
		setMonth(e.target.value);
		transactions(value);
	};

	return (
		<input
			className={styles['input-btn']}
			onChange={handleChange}
			value={month}
			type="month"
		/>
	);
};

export default TransactionMonthWise;
