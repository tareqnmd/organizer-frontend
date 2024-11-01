'use client';

import SkeletonWrapper from '@/components/common/SkeletonWrapper';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TimeFrameEnum } from '@/lib/helper/budget';
import {
	BudgetDashboardHistoryChartDataType,
	BudgetDashboardHistoryMonthType,
	BudgetDashboardHistoryType,
	BudgetDashboardHistoryYearType,
	BudgetDashboardSearchParamsType,
	Period,
} from '@/lib/helper/budget/types';
import { getYearsInRange, monthWiseData, yearWiseData } from '@/lib/utils';
import { useEffect, useState } from 'react';
import BudgetHistoryChartData from './BudgetHistoryChartData';
import BudgetHistoryPeriodSelector from './BudgetHistoryPeriodSelector';

const BudgetHistory = ({
	history,
	searchParams,
}: {
	history: BudgetDashboardHistoryType;
	searchParams: BudgetDashboardSearchParamsType;
}) => {
	const { month = [], year = [] } = history;
	const [timeFrame, setTimeFrame] = useState<TimeFrameEnum>(
		TimeFrameEnum.MONTH,
	);
	const [years, setYears] = useState<number[]>([]);
	const [period, setPeriod] = useState<Period>({
		month: new Date().getMonth(),
		year: new Date().getFullYear(),
	});
	const [chartData, setChartData] = useState<
		BudgetDashboardHistoryChartDataType[]
	>([]);

	useEffect(() => {
		if (searchParams?.from && searchParams?.to) {
			setYears(getYearsInRange(searchParams.from, searchParams.to));
		}
	}, [searchParams.from, searchParams.to]);

	useEffect(() => {
		if (timeFrame === TimeFrameEnum.MONTH && month?.length > 0) {
			const monthData = month.filter(
				(item: BudgetDashboardHistoryMonthType) =>
					item.month === period.month && item.year === period.year,
			);
			const data = monthWiseData(
				monthData as BudgetDashboardHistoryChartDataType[],
				period,
			);
			setChartData(data);
		} else if (timeFrame === TimeFrameEnum.YEAR && year?.length > 0) {
			const yearData = year.filter(
				(item: BudgetDashboardHistoryYearType) =>
					item.year === period.year,
			);
			const data = yearWiseData(
				yearData as BudgetDashboardHistoryChartDataType[],
				period,
			);
			setChartData(data as BudgetDashboardHistoryChartDataType[]);
		}
	}, [month, period, timeFrame, year]);

	return (
		<>
			<h2 className="mt-6 text-xl font-bold">History</h2>
			<Card className="col-span-12 w-full p-2">
				<CardHeader className="mb-4 gap-2 p-0">
					<CardTitle className="flex flex-wrap items-center justify-between gap-2">
						<BudgetHistoryPeriodSelector
							period={period}
							setPeriod={setPeriod}
							timeFrame={timeFrame}
							setTimeFrame={setTimeFrame}
							years={years}
						/>
						<div className="flex h-10 gap-2">
							<Badge
								variant={'outline'}
								className="flex items-center gap-2 text-sm"
							>
								<div className="income h-4 w-4 rounded-full"></div>
								Income
							</Badge>
							<Badge
								variant={'outline'}
								className="flex items-center gap-2 text-sm"
							>
								<div className="expense h-4 w-4 rounded-full"></div>
								Expense
							</Badge>
						</div>
					</CardTitle>
				</CardHeader>
				<CardContent className="p-0">
					<SkeletonWrapper isLoading={false}>
						{chartData?.some(
							(item) => item.expense > 0 || item.income > 0,
						) ? (
							<BudgetHistoryChartData
								chartData={chartData}
								timeFrame={timeFrame}
							/>
						) : (
							<Card className="bg-background flex h-[300px] flex-col items-center justify-center">
								<CardHeader className="p-0">
									<CardTitle>
										No data for the selected period
									</CardTitle>
								</CardHeader>
								<p className="text-muted-foreground mt-3 text-center text-sm">
									Try selecting a different period or adding
									new transactions
								</p>
							</Card>
						)}
					</SkeletonWrapper>
				</CardContent>
			</Card>
		</>
	);
};

export default BudgetHistory;
