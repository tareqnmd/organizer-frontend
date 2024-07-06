'use client';

import SkeletonWrapper from '@/components/common/SkeletonWrapper';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GetFormatterForCurrency } from '@/lib/helper/common';
import { Period, Timeframe } from '@/types';
import { useMemo, useState } from 'react';
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

const BudgetHistory = () => {
	const [timeframe, setTimeframe] = useState<Timeframe>('month');
	const [period, setPeriod] = useState<Period>({
		month: new Date().getMonth(),
		year: new Date().getFullYear(),
	});

	const formatter = useMemo(() => {
		return GetFormatterForCurrency('BDT');
	}, []);

	const historyDataQuery = {
		data: [],
	};

	const dataAvailable =
		historyDataQuery.data && historyDataQuery.data.length > 0;

	return (
		<div className="container">
			<h2 className="mt-12 text-3xl font-bold">History</h2>
			<Card className="col-span-12 mt-2 w-full">
				<CardHeader className="gap-2">
					<CardTitle className="grid grid-flow-row justify-between gap-2 md:grid-flow-col">
						<BudgetHistoryPeriodSelector
							period={period}
							setPeriod={setPeriod}
							timeframe={timeframe}
							setTimeframe={setTimeframe}
						/>

						<div className="flex h-10 gap-2">
							<Badge
								variant={'outline'}
								className="flex items-center gap-2 text-sm"
							>
								<div className="h-4 w-4 rounded-full bg-emerald-500"></div>
								Income
							</Badge>
							<Badge
								variant={'outline'}
								className="flex items-center gap-2 text-sm"
							>
								<div className="h-4 w-4 rounded-full bg-red-500"></div>
								Expense
							</Badge>
						</div>
					</CardTitle>
				</CardHeader>
				<CardContent>
					<SkeletonWrapper isLoading={false}>
						{dataAvailable && (
							<ResponsiveContainer
								width={'100%'}
								height={300}
							>
								<BarChart
									height={300}
									data={historyDataQuery.data}
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
										padding={{ left: 5, right: 5 }}
										dataKey={(data: any) => {
											const { year, month, day } = data;
											const date = new Date(year, month, day || 1);
											if (timeframe === 'year') {
												return date.toLocaleDateString('default', {
													month: 'long',
												});
											}
											return date.toLocaleDateString('default', {
												day: '2-digit',
											});
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
										content={(props: any) => (
											<BudgetCustomTooltip
												formatter={formatter}
												{...props}
											/>
										)}
									/>
								</BarChart>
							</ResponsiveContainer>
						)}
						{!dataAvailable && (
							<Card className="flex h-[300px] flex-col items-center justify-center bg-background">
								No data for the selected period
								<p className="text-sm text-muted-foreground">
									Try selecting a different period or adding new transactions
								</p>
							</Card>
						)}
					</SkeletonWrapper>
				</CardContent>
			</Card>
		</div>
	);
};

export default BudgetHistory;