import { fetchServerData } from '@/utils/fetch/axios-fetch';
import TransactionsOverviewDetails from './TransactionsOverviewDetails';

const getData = async () => {
	try {
		const response = await fetchServerData('transaction/overview');
		return response.data ?? {};
	} catch (error) {
		return {};
	}
};

const TransactionsOverview = async () => {
	const transactionsOverview = await getData();
	return (
		<TransactionsOverviewDetails
			transactionsOverview={transactionsOverview}
		/>
	);
};

export default TransactionsOverview;
