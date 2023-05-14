import MasterGrid from '../../engine/master-grid/MasterGrid';
import { useGetTransactionsQuery } from '../../features/transactions/transactionApi';
import Error from '../ui/Error';
import Loading from '../ui/Loading';
import NoDataFound from '../ui/NoDataFound';
const AllTransactions = () => {
	const { data, isSuccess, isError, isLoading } = useGetTransactionsQuery({});

	let content = null;
	if (isLoading) {
		content = <Loading />;
	} else if (!isLoading && isError) {
		content = <Error message={'Error found'} />;
	} else if (!isLoading && isSuccess && data?.items?.length === 0) {
		content = <NoDataFound />;
	} else if (!isLoading && isSuccess && data?.items?.length > 0) {
		content = data?.columns && data?.items && (
			<MasterGrid
				data={data?.items}
				columns={data?.columns}
			/>
		);
	}

	return content;
};

export default AllTransactions;
