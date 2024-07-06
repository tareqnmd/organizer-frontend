import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Period } from '@/types';

const BudgetHistoryYearSelector = ({
	period,
	setPeriod,
	years = [],
}: {
	period: Period;
	setPeriod: (period: Period) => void;
	years: any;
}) => {
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
			<SelectTrigger className="w-[180px]">
				<SelectValue />
			</SelectTrigger>
			<SelectContent>
				{years.map((year: any) => (
					<SelectItem
						key={year}
						value={year.toString()}
					>
						{year}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

export default BudgetHistoryYearSelector;
