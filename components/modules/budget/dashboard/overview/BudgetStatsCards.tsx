'use client';
import SkeletonWrapper from '@/components/common/SkeletonWrapper';
import { GetFormatterForCurrency } from '@/helper/shared/common';
import { TrendingDown, TrendingUp, Wallet } from 'lucide-react';
import { useMemo } from 'react';
import BudgetStatsCard from './BudgetStatsCard';
function BudgetStatsCards({
	amount,
}: {
	amount: {
		income: number;
		expense: number;
		balance: number;
	};
}) {
	const formatter = useMemo(() => {
		return GetFormatterForCurrency('BDT');
	}, []);

	const { income = 0, expense = 0, balance = 0 } = amount;

	return (
		<div className="relative flex w-full flex-wrap gap-4 lg:flex-nowrap">
			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={income}
					title="Income"
					icon={
						<TrendingUp className="h-12 w-12 items-center rounded-lg p-2 income bg-emerald-400/10" />
					}
				/>
			</SkeletonWrapper>

			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={expense}
					title="Expense"
					icon={
						<TrendingDown className="h-12 w-12 items-center rounded-lg p-2 expense bg-red-400/10" />
					}
				/>
			</SkeletonWrapper>

			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={balance}
					title="Balance"
					icon={
						<Wallet className="h-12 w-12 items-center rounded-lg p-2 balance bg-violet-400/10" />
					}
				/>
			</SkeletonWrapper>
		</div>
	);
}

export default BudgetStatsCards;
