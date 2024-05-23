'use client';
import { Card } from '@/components/ui/card';
import { axiosInstance } from '@/lib/fetch';
import { useEffect, useState } from 'react';

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
		<div className="grid gap-4">
			<div className="grid gap-4 grid-cols-3">
				<Card>
					{data?.all?.amount}({data?.all?.transactions})
				</Card>
				<Card>{data?.all?.income_amount}</Card>
				<Card>{data?.all?.expense_amount}</Card>
			</div>
			<div className="grid gap-4 grid-cols-3">
				<Card>
					{data?.current_month?.amount}({data?.current_month?.transactions})
				</Card>
				<Card>{data?.current_month?.income_amount}</Card>
				<Card>{data?.current_month?.expense_amount}</Card>
			</div>
		</div>
	);
};

export default Budget;
