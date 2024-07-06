'use client';

import SkeletonWrapper from '@/components/common/SkeletonWrapper';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Period, Timeframe } from '@/types';
import BudgetHistoryMonthSelector from './BudgetHistoryMonthSelector';
import BudgetHistoryYearSelector from './BudgetHistoryYearSelector';

interface Props {
	period: Period;
	setPeriod: (period: Period) => void;
	timeframe: Timeframe;
	setTimeframe: (timeframe: Timeframe) => void;
}

const BudgetHistoryPeriodSelector = ({
	period,
	setPeriod,
	timeframe,
	setTimeframe,
}: Props) => {
	const historyPeriods = { data: [] };

	return (
		<div className="flex flex-wrap items-center gap-4">
			<SkeletonWrapper
				isLoading={false}
				fullWidth={false}
			>
				<Tabs
					value={timeframe}
					onValueChange={(value: string) => setTimeframe(value as Timeframe)}
				>
					<TabsList>
						<TabsTrigger value="year">Year</TabsTrigger>
						<TabsTrigger value="month">Month</TabsTrigger>
					</TabsList>
				</Tabs>
			</SkeletonWrapper>
			<div className="flex flex-wrap items-center gap-2">
				<SkeletonWrapper
					isLoading={false}
					fullWidth={false}
				>
					<BudgetHistoryYearSelector
						period={period}
						setPeriod={setPeriod}
						years={historyPeriods.data || []}
					/>
				</SkeletonWrapper>
				{timeframe === 'month' && (
					<SkeletonWrapper
						isLoading={false}
						fullWidth={false}
					>
						<BudgetHistoryMonthSelector
							period={period}
							setPeriod={setPeriod}
						/>
					</SkeletonWrapper>
				)}
			</div>
		</div>
	);
};

export default BudgetHistoryPeriodSelector;
