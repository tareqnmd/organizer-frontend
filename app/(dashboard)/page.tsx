import Dashboard from '@/components/dashboard/Dashboard';
import { baseFetch } from '@/utils/fetch';

async function getData() {
	const res = await baseFetch('api');
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}

const page = async () => {
	const { data } = await getData();
	return <Dashboard modules={data} />;
};

export default page;
