import { authOptions } from '@/lib/auth-options';
import { authFetch } from '@/lib/fetch';
import { BudgetType as BType } from '@/types/modules/budget/budget-types';
import { getServerSession } from 'next-auth';
import BudgetType from './BudgetType';
import { BudgetTypeAdd } from './BudgetTypeAdd';
export type TypesParamType = { type?: 'Income' | 'Expense' };

const getBudgetTypes = async (params: TypesParamType) => {
	const queryParams = new URLSearchParams(params);
	const res = await authFetch(`budget/types?${queryParams}`);
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
};

const BudgetTypes = async ({
	searchOptions,
}: {
	searchOptions: TypesParamType;
}) => {
	const types = await getBudgetTypes(searchOptions);
	const session = await getServerSession(authOptions);
	return (
		<>
			{session?.user?.role === 'admin' && (
				<div className="flex justify-end gap-2 mb-3">
					<BudgetTypeAdd />
				</div>
			)}
			<div
				className="grid grid-cols-1 sm:grid-cols-2
			 lg:grid-cols-3 xl:grid-cols-4 gap-2"
			>
				{types?.map((type: BType) => (
					<BudgetType
						key={type.id}
						type={type}
						admin={session?.user?.role === 'admin'}
					/>
				))}
			</div>
		</>
	);
};

export default BudgetTypes;
