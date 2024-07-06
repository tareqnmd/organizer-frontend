import BudgetCustomTooltipRow from './BudgetCustomTooltipRow';

const BudgetCustomTooltip = ({ active, payload, formatter }: any) => {
	if (!active || !payload || payload.length === 0) return null;

	const data = payload[0].payload;
	const { expense, income } = data;

	return (
		<div className="min-w-[300px] rounded border bg-background p-4">
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
