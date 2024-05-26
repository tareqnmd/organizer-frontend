import { authOptions } from '@/lib/auth-options';
import { serverAuthFetch } from '@/lib/helper/fetch';
import { BudgetTypeType } from '@/types/modules/budget/budget-type-types';
import { getServerSession } from 'next-auth';
import BudgetType from './BudgetType';
import { BudgetTypeAdd } from './BudgetTypeAdd';

const getBudgetTypes = async () => {
	try {
		const res = await serverAuthFetch(`budget/types`);
		if (!res.ok) {
			throw new Error('Failed to fetch data');
		}
		return res.json();
	} catch (error) {
		console.log('error', error);
	}
};

const BudgetTypes = async ({}) => {
	const types = await getBudgetTypes();
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
				{types?.map((type: BudgetTypeType) => (
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
