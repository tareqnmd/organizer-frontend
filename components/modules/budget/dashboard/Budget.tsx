import SubTitle from '@/components/common/SubTitle';
import Title from '@/components/common/Title';
import { Separator } from '@/components/ui/separator';
import { BudgetDashboardSearchParamsType } from '@/lib/helper/budget';
import { generateDataFromServer, nextProperties } from '@/lib/utils';
import BudgetFilter from './BudgetFilter';
import BudgetHistory from './history/BudgetHistory';
import BudgetOverview from './overview/BudgetOverview';
import BudgetStatsCards from './overview/BudgetStatsCards';

const Budget = async ({
	searchParams = {},
}: {
	searchParams?: BudgetDashboardSearchParamsType;
}) => {
	const queryParams = new URLSearchParams(searchParams);
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
			<Title>Grand Total</Title>
			<BudgetStatsCards amount={grandTotal} />
			<Separator />
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
