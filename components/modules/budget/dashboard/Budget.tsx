'use client';
import { axiosInstance } from '@/lib/helper/axios-api';
import { useEffect, useState } from 'react';
import BudgetHistory from './history/BudgetHistory';
import BudgetOverview from './overview/BudgetOverview';

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
			<BudgetOverview />
			<BudgetHistory />
		</>
	);
};

export default Budget;
