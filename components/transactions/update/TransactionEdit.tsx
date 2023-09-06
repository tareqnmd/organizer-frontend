import { ITransaction } from '@/utils/types/transaction-types';

const TransactionEdit = ({ data }: { data: ITransaction }) => {
	return <>{data.typeName}</>;
};

export default TransactionEdit;
