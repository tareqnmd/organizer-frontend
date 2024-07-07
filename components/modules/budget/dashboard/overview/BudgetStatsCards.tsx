'use client';
import SkeletonWrapper from '@/components/common/SkeletonWrapper';
import { GetFormatterForCurrency } from '@/lib/helper/common';
import { useMemo } from 'react';
import { IoIosTrendingDown, IoIosTrendingUp } from 'react-icons/io';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';
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
		<div className="relative flex w-full flex-wrap gap-2 md:flex-nowrap">
			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={income}
					title="Income"
					icon={
						<IoIosTrendingUp className="h-12 w-12 items-center rounded-lg p-2 text-emerald-500 bg-emerald-400/10" />
					}
				/>
			</SkeletonWrapper>

			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={expense}
					title="Expense"
					icon={
						<IoIosTrendingDown className="h-12 w-12 items-center rounded-lg p-2 text-red-500 bg-red-400/10" />
					}
				/>
			</SkeletonWrapper>

			<SkeletonWrapper isLoading={false}>
				<BudgetStatsCard
					formatter={formatter}
					value={balance}
					title="Balance"
					icon={
						<MdOutlineAccountBalanceWallet className="h-12 w-12 items-center rounded-lg p-2 text-violet-500 bg-violet-400/10" />
					}
				/>
			</SkeletonWrapper>
		</div>
	);
}

export default BudgetStatsCards;
