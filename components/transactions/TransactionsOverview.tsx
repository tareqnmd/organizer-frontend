import { fetchServerData } from '@/utils/fetch/axios-fetch';

async function getData() {
	try {
		const response = await fetchServerData('transaction/overview');
		return response.data ?? {};
	} catch (error) {
		return {};
	}
}

const TransactionsOverview = () => {
	const transactionsOverview = getData();
	return <>test</>;
};

export default TransactionsOverview;
