import { BudgetDashboardHistoryTooltipPropsType } from '@/lib/helper/budget';
import BudgetCustomTooltipRow from './BudgetCustomTooltipRow';

const BudgetCustomTooltip = ({
	active,
	payload,
	formatter,
}: BudgetDashboardHistoryTooltipPropsType) => {
	if (!active || !payload || Object.keys(payload).length === 0) return null;

	const { expense, income } = payload;

	return (
		<div className="min-w-[300px] rounded border bg-white p-4">
			<BudgetCustomTooltipRow
				formatter={formatter}
				label="Expense"
				value={expense}
				bgColor="bg-red-500"
				textColor="text-red-500"
			/>
			<BudgetCustomTooltipRow
				formatter={formatter}
				label="Income"
				value={income}
				bgColor="bg-emerald-500"
				textColor="text-emerald-500"
			/>
			<BudgetCustomTooltipRow
				formatter={formatter}
				label="Balance"
				value={income - expense}
				bgColor="bg-gray-100"
				textColor="text-foreground"
			/>
		</div>
	);
};

export default BudgetCustomTooltip;
