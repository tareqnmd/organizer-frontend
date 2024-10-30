import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { BudgetDashboardHistoryMonthSelectorPropsType } from '@/lib/helper/budget/types';

const BudgetHistoryMonthSelector = ({
	period,
	setPeriod,
}: BudgetDashboardHistoryMonthSelectorPropsType) => {
	return (
		<Select
			value={period.month.toString()}
			onValueChange={(value) => {
				setPeriod({
					year: period.year,
					month: parseInt(value),
				});
			}}
		>
			<SelectTrigger className="w-[120px]">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				{[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((month) => {
					const monthStr = new Date(
						period.year,
						month,
						1,
					).toLocaleString('default', { month: 'long' });

					return (
						<SelectItem key={month} value={month.toString()}>
							{monthStr}
						</SelectItem>
					);
				})}
			</SelectContent>
		</Select>
	);
};

export default BudgetHistoryMonthSelector;
