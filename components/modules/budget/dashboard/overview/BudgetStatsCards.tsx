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
					icon={<TrendingUp className="income stat-card" />}
				/>
			</SkeletonWrapper>
			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={expense}
					title="Expense"
					icon={<TrendingDown className="expense stat-card" />}
				/>
			</SkeletonWrapper>
			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={balance}
					title="Balance"
					icon={<WalletMinimal className="neutral stat-card" />}
				/>
			</SkeletonWrapper>
			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={saving}
					title="Saving"
					icon={<Wallet className="neutral stat-card" />}
				/>
			</SkeletonWrapper>
			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={loan}
					title="Loan Taken"
					icon={<HandCoins className="expense stat-card" />}
				/>
			</SkeletonWrapper>
			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={loan}
					title="Loan Given"
					icon={<HandCoins className="income stat-card" />}
				/>
			</SkeletonWrapper>
		</div>
	);
}

export default BudgetStatsCards;
