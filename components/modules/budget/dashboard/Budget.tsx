import SubTitle from '@/components/common/SubTitle';
import { BudgetDashboardSearchParamsType } from '@/lib/helper/budget';
import { generateDataFromServer, nextProperties } from '@/lib/utils';
import BudgetFilter from './BudgetFilter';
import BudgetGrandTotal from './BudgetGrandTotal';
import BudgetHistory from './history/BudgetHistory';
import BudgetOverview from './overview/BudgetOverview';

const Budget = async ({
	searchParams = {},
}: {
	searchParams?: BudgetDashboardSearchParamsType;
}) => {
	const queryParams = new URLSearchParams();
	Object.entries(searchParams).forEach(([key, value]) => {
		if (value !== null) queryParams.append(key, value);
	});
	const url = `budget?${queryParams}`;
	const { data: budget = {} } = await generateDataFromServer(
		url,
		nextProperties({}),
	);
	const { overview = {}, history = {} } = budget;

	const grandUrl = 'budget/grand-total';
	const { data: grandTotal = {} } = await generateDataFromServer(
		grandUrl,
		nextProperties({}),
	);

	return (
		<div className="flex flex-col gap-4">
			<BudgetGrandTotal grandTotal={grandTotal} />
			<SubTitle className="text-right">Select Date Range</SubTitle>
			<div className="grid justify-end">
				<BudgetFilter searchParams={searchParams} />
			</div>
			<BudgetOverview overview={overview} />
			<BudgetHistory history={history} searchParams={searchParams} />
		</div>
	);
};

export default Budget;
