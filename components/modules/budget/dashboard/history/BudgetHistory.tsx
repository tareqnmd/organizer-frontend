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
import {
	GetFormatterForCurrency,
	getYearsInRange,
	monthWiseData,
	yearWiseData,
} from '@/lib/utils';
import { useEffect, useMemo, useState } from 'react';
import {
	Bar,
	BarChart,
	CartesianGrid,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import BudgetCustomTooltip from './BudgetCustomTooltip';
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

	const formatter = useMemo(() => {
		return GetFormatterForCurrency('BDT');
	}, []);

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
			const data = monthWiseData(monthData, period);
			setChartData(data);
		} else if (timeFrame === TimeFrameEnum.YEAR && year?.length > 0) {
			const yearData = year.filter(
				(item: BudgetDashboardHistoryYearType) =>
					item.year === period.year,
			);
			const data = yearWiseData(yearData, period);
			setChartData(data);
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
							<ResponsiveContainer width={'100%'} height={300}>
								<BarChart
									height={300}
									data={chartData}
									barCategoryGap={5}
								>
									<defs>
										<linearGradient
											id="incomeBar"
											x1="0"
											y1="0"
											x2="0"
											y2="1"
										>
											<stop
												offset={'0'}
												stopColor="#10b981"
												stopOpacity={'1'}
											/>
											<stop
												offset={'1'}
												stopColor="#10b981"
												stopOpacity={'0'}
											/>
										</linearGradient>

										<linearGradient
											id="expenseBar"
											x1="0"
											y1="0"
											x2="0"
											y2="1"
										>
											<stop
												offset={'0'}
												stopColor="#ef4444"
												stopOpacity={'1'}
											/>
											<stop
												offset={'1'}
												stopColor="#ef4444"
												stopOpacity={'0'}
											/>
										</linearGradient>
									</defs>
									<CartesianGrid
										strokeDasharray="5 5"
										strokeOpacity={'0.2'}
										vertical={false}
									/>
									<XAxis
										stroke="#888888"
										fontSize={12}
										tickLine={false}
										axisLine={false}
										padding={{ left: 0, right: 0 }}
										dataKey={(data) => {
											const { year, month, day } = data;
											const date = new Date(
												year,
												month,
												day || 1,
											);
											if (
												timeFrame === TimeFrameEnum.YEAR
											) {
												return date.toLocaleDateString(
													'default',
													{
														month: 'short',
													},
												);
											}
											return date.toLocaleDateString(
												'default',
												{
													day: '2-digit',
												},
											);
										}}
									/>
									<YAxis
										stroke="#888888"
										fontSize={12}
										tickLine={false}
										axisLine={false}
									/>
									<Bar
										dataKey={'income'}
										label="Income"
										fill="url(#incomeBar)"
										radius={4}
										className="cursor-pointer"
									/>
									<Bar
										dataKey={'expense'}
										label="Expense"
										fill="url(#expenseBar)"
										radius={4}
										className="cursor-pointer"
									/>
									<Tooltip
										cursor={{ opacity: 0.1 }}
										content={(props) => (
											<BudgetCustomTooltip
												formatter={formatter}
												payload={
													props?.payload?.[0]
														?.payload ?? {}
												}
												active={props.active}
											/>
										)}
									/>
								</BarChart>
							</ResponsiveContainer>
						) : (
							<Card className="bg-background flex h-[300px] flex-col items-center justify-center">
								No data for the selected period
								<p className="text-muted-foreground text-center text-sm">
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
