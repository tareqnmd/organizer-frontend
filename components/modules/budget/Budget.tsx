'use client';
import { Skeleton } from '@/components/ui/skeleton';
import { axiosInstance } from '@/lib/fetch';
import { useEffect, useState } from 'react';
import BudgetInfoCard from './BudgetInfoCard';

const Budget = () => {
	const [data, setData] = useState<any>({});
	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axiosInstance('budget/transactions-overview');
			setData(data);
		};
		fetchData();
	}, []);
	return data?.all ? (
		<div className="grid gap-4">
			<h3 className="text-lg font-bold">All Information</h3>
			<div className="grid gap-4 grid-cols-3">
				<BudgetInfoCard className="bg-blue-200">
					{data?.all?.amount}({data?.all?.transactions})
				</BudgetInfoCard>
				<BudgetInfoCard className="bg-green-200">
					{data?.all?.income_amount}
				</BudgetInfoCard>
				<BudgetInfoCard className="bg-red-200">
					{data?.all?.expense_amount}
				</BudgetInfoCard>
			</div>
			<h3 className="text-lg font-bold">Current Information</h3>
			<div className="grid gap-4 grid-cols-3">
				<BudgetInfoCard className="bg-blue-200">
					{data?.current_month?.amount}({data?.current_month?.transactions})
				</BudgetInfoCard>
				<BudgetInfoCard className="bg-green-200">
					{data?.current_month?.income_amount}
				</BudgetInfoCard>
				<BudgetInfoCard className="bg-red-200">
					{data?.current_month?.expense_amount}
				</BudgetInfoCard>
			</div>
		</div>
	) : (
		<div className="grid gap-4">
			<div className="grid gap-4 grid-cols-3">
				<Skeleton className="w-full h-[60px] rounded" />
				<Skeleton className="w-full h-[60px] rounded" />
				<Skeleton className="w-full h-[60px] rounded" />
			</div>
			<div className="grid gap-4 grid-cols-3">
				<Skeleton className="w-full h-[60px] rounded" />
				<Skeleton className="w-full h-[60px] rounded" />
				<Skeleton className="w-full h-[60px] rounded" />
			</div>
		</div>
	);
};

export default Budget;
