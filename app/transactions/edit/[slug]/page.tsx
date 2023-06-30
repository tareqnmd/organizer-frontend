import TransactionEdit from '@/components/transactions/edit/TransactionEdit';
import { fetchData } from '@/utils/fetch/axios-fetch';

const getData = async (slug: string) => {
	try {
		const response = await fetchData(`transaction/${slug}`);
		return response.data;
	} catch (error) {
		return {};
	}
};

const page = async ({ params }: { params: { slug: string } }) => {
	const data = await getData(params.slug);
	return <TransactionEdit data={data} />;
};

export default page;
