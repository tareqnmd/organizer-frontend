import { authFetch } from '@/lib/fetch';
import TransactionType from './TransactionType';

export type Type = {
	_id: string;
	type: string;
	name: string;
	status: 1 | 0;
	status_name: string;
};

const getTransactionTypes = async () => {
	const res = await authFetch('type');
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
};

const TransactionTypes = async () => {
	const types = await getTransactionTypes();
	return (
		<div className="grid grid-cols-4 gap-2">
			{types?.map((type: Type) => (
				<TransactionType
					key={type._id}
					type={type}
				/>
			))}
		</div>
	);
};

export default TransactionTypes;
