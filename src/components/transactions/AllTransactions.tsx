import MasterGrid from '../../engine/master-grid/MasterGrid';
import { useGetTransactionsQuery } from '../../features/transactions/transactionApi';

const AllTransactions = () => {
	const { data } = useGetTransactionsQuery({});
	return (
		<>
			{data?.columns && data?.items && (
				<MasterGrid
					data={data?.items}
					columns={data?.columns}
				/>
			)}
		</>
	);
};

export default AllTransactions;
