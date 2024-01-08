import { authFetch } from '@/lib/fetch';
import TransactionType from './TransactionType';
import TransactionTypeAction from './TransactionTypeAction';

export type Type = {
	_id: string;
	type: 'Income' | 'Expense';
	name: string;
	status: 1 | 0;
	status_name: string;
};

export type TypesParamType = { expense?: string; income?: string };

const getTransactionTypes = async () => {
	const res = await authFetch('type');
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
};

const TransactionTypes = async ({
	searchOptions,
}: {
	searchOptions: TypesParamType;
}) => {
	const types = await getTransactionTypes();
	return (
		<>
			<TransactionTypeAction params={searchOptions} />
			<div
				className="grid grid-cols-2
			 lg:grid-cols-3 xl:grid-cols-4 gap-2"
			>
				{types?.map((type: Type) => (
					<TransactionType
						key={type._id}
						type={type}
					/>
				))}
			</div>
		</>
	);
};

export default TransactionTypes;
