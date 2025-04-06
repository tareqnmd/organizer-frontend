'use client';
import SkeletonWrapper from '@/components/common/SkeletonWrapper';
import { BudgetDashboardOverviewAmountType } from '@/lib/helper/budget';
import { GetFormatterForCurrency } from '@/lib/utils';
import {
	HandCoins,
	TrendingDown,
	TrendingUp,
	Wallet,
	WalletMinimal,
} from 'lucide-react';
import { useMemo } from 'react';
import BudgetStatsCard from './BudgetStatsCard';
function BudgetStatsCards({
	amount,
}: {
	amount: BudgetDashboardOverviewAmountType;
}) {
	const formatter = useMemo(() => {
		return GetFormatterForCurrency('BDT');
	}, []);

	const {
		income = 0,
		expense = 0,
		balance = 0,
		saving = 0,
		loan = 0,
	} = amount || {};

	return (
		<div className="grid grid-cols-2 gap-4 lg:grid-cols-6">
			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={income}
					title="Income"
					className="lg:col-span-3"
					icon={
						<TrendingUp className="income h-12 w-12 items-center rounded-lg bg-emerald-400/10 p-2" />
					}
				/>
			</SkeletonWrapper>
			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={expense}
					title="Expense"
					className="lg:col-span-3"
					icon={
						<TrendingDown className="expense h-12 w-12 items-center rounded-lg bg-red-400/10 p-2" />
					}
				/>
			</SkeletonWrapper>
			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={saving}
					title="Saving"
					className="lg:col-span-2"
					icon={
						<Wallet className="neutral h-12 w-12 items-center rounded-lg bg-violet-400/10 p-2" />
					}
				/>
			</SkeletonWrapper>
			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={loan}
					title="Loan"
					className="lg:col-span-2"
					icon={
						<HandCoins className="neutral h-12 w-12 items-center rounded-lg bg-violet-400/10 p-2" />
					}
				/>
			</SkeletonWrapper>
			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={balance}
					title="Balance"
					className="col-span-full lg:col-span-2"
					icon={
						<WalletMinimal className="neutral h-12 w-12 items-center rounded-lg bg-violet-400/10 p-2" />
					}
				/>
			</SkeletonWrapper>
		</div>
	);
}

export default BudgetStatsCards;
