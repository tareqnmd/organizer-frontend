'use client';
import { axiosInstance } from '@/lib/helper/fetch';
import { useEffect, useState } from 'react';
import BudgetHistory from './BudgetHistory';
import BudgetOverview from './BudgetOverview';

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
