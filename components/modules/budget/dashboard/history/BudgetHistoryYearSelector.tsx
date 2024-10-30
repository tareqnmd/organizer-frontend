import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { BudgetDashboardHistoryYearSelectorPropsType } from '@/lib/helper/budget/types';

const BudgetHistoryYearSelector = ({
	period,
	setPeriod,
	years = [],
}: BudgetDashboardHistoryYearSelectorPropsType) => {
	return (
		<Select
			value={period.year.toString()}
			onValueChange={(value) => {
				setPeriod({
					month: period.month,
					year: parseInt(value),
				});
			}}
		>
			<SelectTrigger className="w-[80px]">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				{years.map((year) => (
					<SelectItem key={year} value={year.toString()}>
						{year}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

export default BudgetHistoryYearSelector;
