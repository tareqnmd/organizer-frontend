import { baseDateFormat } from '@/lib/helper/date';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/server-fetch';
import { endOfMonth, startOfMonth } from 'date-fns';
import BudgetFilter from './BudgetFilter';
import BudgetHistory from './history/BudgetHistory';
import BudgetOverview from './overview/BudgetOverview';

const Budget = async ({ searchParams = {} }: { searchParams?: any }) => {
	const queryParams = new URLSearchParams(searchParams);
	const url = `budget?${queryParams}`;
	const { data: budget = {} } = await generateDataFromServer(
		url,
		nextProperties({})
	);

	const { overview, history } = budget;

	return (
		<div className="flex flex-col gap-4">
			<div className="grid justify-end">
				<BudgetFilter
					searchParams={{
						...searchParams,
						from: searchParams.from ?? baseDateFormat(startOfMonth(new Date())),
						to: searchParams.to ?? baseDateFormat(endOfMonth(new Date())),
					}}
				/>
			</div>
			<BudgetOverview overview={overview} />
			<BudgetHistory history={history} />
		</div>
	);
};

export default Budget;
