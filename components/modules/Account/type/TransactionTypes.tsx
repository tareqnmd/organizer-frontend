import { authFetch } from '@/lib/fetch';
import TransactionType from './TransactionType';
import TransactionTypeAction from './TransactionTypeAction';
import { TransactionTypeCreate } from './TransactionTypeCreate';

export type Type = {
	_id: string;
	type: 'Income' | 'Expense';
	name: string;
	status: 1 | 0;
	status_name: string;
};

export type TypesParamType = { type?: 'Income' | 'Expense' };

const getTransactionTypes = async (params: TypesParamType) => {
	const queryParams = new URLSearchParams(params);
	const res = await authFetch(`type?${queryParams}`);
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
	const types = await getTransactionTypes(searchOptions);
	return (
		<>
			<div className="flex justify-end gap-2 mb-3">
				<TransactionTypeAction params={searchOptions} />
				<TransactionTypeCreate />
			</div>
			<div
				className="grid grid-cols-1 sm:grid-cols-2
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
