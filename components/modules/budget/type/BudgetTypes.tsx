import { authOptions } from '@/lib/auth-options';
import { BudgetTypeType } from '@/lib/helper/modules/budget';
import {
	generateDataFromServer,
	nextProperties,
} from '@/lib/helper/shared/server-fetch';
import { getServerSession } from 'next-auth';
import BudgetType from './BudgetType';
import { BudgetTypeAdd } from './BudgetTypeAdd';

const BudgetTypes = async ({}) => {
	const { data: types } = await generateDataFromServer(
		'budget/types',
		nextProperties({}),
	);
	const session = await getServerSession(authOptions);
	return (
		<>
			{session?.user?.role === 'admin' && (
				<div className="mb-3 flex justify-end gap-2">
					<BudgetTypeAdd />
				</div>
			)}
			<div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
