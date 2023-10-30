import Transactions from '@/components/hisab/transactions/Transactions';
import { fetchServerData } from '@/utils/fetch/axios-fetch';
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
const page = async () => {
	const data = await getTransactionData();
	return <Transactions data={data} />;
};

export default page;
