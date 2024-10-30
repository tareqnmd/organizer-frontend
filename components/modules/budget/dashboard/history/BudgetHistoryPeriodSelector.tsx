'use client';

import SkeletonWrapper from '@/components/common/SkeletonWrapper';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
	BudgetDashboardHistoryPeriodSelectorPropsType,
	TimeFrameEnum,
} from '@/lib/helper/budget';
import BudgetHistoryMonthSelector from './BudgetHistoryMonthSelector';
import BudgetHistoryYearSelector from './BudgetHistoryYearSelector';

const BudgetHistoryPeriodSelector = ({
	period,
	setPeriod,
	timeFrame,
	setTimeFrame,
	years,
}: BudgetDashboardHistoryPeriodSelectorPropsType) => {
	return (
		<div className="flex flex-wrap items-center gap-2">
			<SkeletonWrapper isLoading={false} fullWidth={false}>
				<Tabs
					value={timeFrame}
					onValueChange={(value: string) =>
						setTimeFrame(value as TimeFrameEnum)
					}
				>
					<TabsList>
						<TabsTrigger value="year">Year</TabsTrigger>
						<TabsTrigger value="month">Month</TabsTrigger>
					</TabsList>
				</Tabs>
			</SkeletonWrapper>
			<div className="flex flex-wrap items-center gap-2">
				<SkeletonWrapper isLoading={false} fullWidth={false}>
					<BudgetHistoryYearSelector
						period={period}
						setPeriod={setPeriod}
						years={years}
					/>
				</SkeletonWrapper>
				{timeFrame === 'month' && (
					<SkeletonWrapper isLoading={false} fullWidth={false}>
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
