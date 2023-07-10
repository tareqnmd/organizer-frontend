import { fetchServerData } from '@/utils/fetch/axios-fetch';
import RecentTransactionsDetails from './RecentTransactionsDetails';

async function getTransactionData() {
	try {
		const response = await fetchServerData('transaction/recent');
		return response.data;
	} catch (error) {
		return [];
	}
}

const RecentTransactions = async () => {
	const transactions = await getTransactionData();
	return <RecentTransactionsDetails transactions={transactions} />;
};

export default RecentTransactions;
