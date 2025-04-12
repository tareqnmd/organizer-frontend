import { BudgetDashboardOverviewAmountType } from '@/lib/helper/budget';

const BudgetWarning = ({
	amount,
}: {
	amount: BudgetDashboardOverviewAmountType;
}) => {
	const { balance } = amount;

	return balance < 0 ? (
		<div className="rounded-md border border-red-500 bg-red-500/10 p-2 text-center">
			<p className="text-sm leading-4 text-red-500">
				Your expenses exceed your income
			</p>
		</div>
	) : null;
};

export default BudgetWarning;
