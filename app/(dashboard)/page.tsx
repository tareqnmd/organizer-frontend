import Dashboard from '@/components/dashboard/Dashboard';
import { baseFetch } from '@/utils/fetch';

export const dynamic = 'force-dynamic';

async function getData() {
	const res = await baseFetch('api');
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}

const page = async () => {
	const { data } = await getData();
	return (
		<main className="container mx-auto py-4">
			<Dashboard modules={data} />
		</main>
	);
};

export default page;
