import { useGetTransactionQuery } from '@/features/transactions/transactions-api';
import { dateFormat, millionNumberFormat } from '@/utils/helpers/transaction-helper';

const TransactionsDetail = ({ transactionId }: { transactionId: string }) => {
	const { data: transaction } = useGetTransactionQuery(transactionId, {
		skip: !transactionId,
	});
	return (
		<div className="p-3 bg-[#0b2447] rounded-md shadow-md text-white grid grid-cols-3">
			<p>Date : {dateFormat(transaction?.date)}</p>
			<p>Type : {transaction?.typeName}</p>
			<p>Amount : {millionNumberFormat(transaction?.amount)}</p>
			<p className="col-span-3">
				Description : {transaction?.description}
			</p>
		</div>
	);
};

export default TransactionsDetail;
