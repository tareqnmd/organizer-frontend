import { BudgetDashboardOverviewAmountType } from '@/lib/helper/budget';

const BudgetWarning = ({
	amount,
}: {
	amount: BudgetDashboardOverviewAmountType;
}) => {
	const { balance } = amount;

	return balance < 0 ? (
		<div className="rounded-md border border-dashed border-red-500 p-2 text-center md:p-3">
			<p className="text-sm leading-4 text-red-500 md:text-base">
				Your expenses exceed your income
			</p>
		</div>
	) : null;
};

export default BudgetWarning;
