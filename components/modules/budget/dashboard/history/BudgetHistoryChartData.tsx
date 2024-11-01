'use client';

import {
	BudgetDashboardHistoryChartDataType,
	TimeFrameEnum,
} from '@/lib/helper/budget';
import { GetFormatterForCurrency } from '@/lib/utils';
import { useMemo } from 'react';
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

const BudgetHistoryChartData = ({
	chartData,
	timeFrame,
}: {
	chartData: BudgetDashboardHistoryChartDataType[];
	timeFrame: TimeFrameEnum;
}) => {
	const formatter = useMemo(() => {
		return GetFormatterForCurrency('BDT');
	}, []);

	return (
		<ResponsiveContainer width={'100%'} height={300}>
			<BarChart height={300} data={chartData} barCategoryGap={5}>
				<defs>
					<linearGradient id="incomeBar" x1="0" y1="0" x2="0" y2="1">
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

					<linearGradient id="expenseBar" x1="0" y1="0" x2="0" y2="1">
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
						const date = new Date(year, month, day || 1);
						if (timeFrame === TimeFrameEnum.YEAR) {
							return date.toLocaleDateString('default', {
								month: 'short',
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
					content={(props) => (
						<BudgetCustomTooltip
							formatter={formatter}
							payload={props?.payload?.[0]?.payload ?? {}}
							active={props.active}
						/>
					)}
				/>
			</BarChart>
		</ResponsiveContainer>
	);
};

export default BudgetHistoryChartData;
