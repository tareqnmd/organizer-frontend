'use client';
import { axiosInstance } from '@/lib/helper/fetch';
import { useEffect, useState } from 'react';
import BudgetStatsCards from './BudgetStatsCards';

const Budget = () => {
	const [data, setData] = useState<any>({});
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axiosInstance('budget/transactions-overview');
			setData(data);
		};
		fetchData();
	}, []);
	return (
		<>
			<BudgetStatsCards />
		</>
	);
};

export default Budget;
