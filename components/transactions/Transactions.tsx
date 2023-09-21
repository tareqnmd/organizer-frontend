import { fetchServerData } from '@/utils/fetch/axios-fetch';
import TransactionsDetails from '../transactions/TransactionsDetails';

async function getTransactionData() {
	try {
		const response = await fetchServerData('transaction', {
			month: new Date().getMonth() + 1,
		});
		return response.data;
	} catch (error) {
		return [];
	}
}

const Transactions = async () => {
	const transactions = await getTransactionData();
	return <TransactionsDetails transactions={transactions} />;
};

export default Transactions;
