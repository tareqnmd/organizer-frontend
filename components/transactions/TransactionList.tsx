import { fetchData } from '@/utils/fetch/axios-fetch';
import TransactionsDetails from './TransactionsDetails';

async function getTransactionData() {
	try {
		const response = await fetchData('transactions');
		return response.data;
	} catch (error) {
		return [];
	}
}

const TransactionList = async () => {
	const transactions = await getTransactionData();
	return <TransactionsDetails transactions={transactions} />;
};

export default TransactionList;
