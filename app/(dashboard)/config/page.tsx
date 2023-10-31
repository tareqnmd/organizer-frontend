import ConfigCards from '@/components/config/ConfigCards';
import { basicFetchData } from '@/utils/fetch/basic-fetch';

async function getData() {
	const res = await basicFetchData('config', {
		cache: 'no-store',
	});
	if (!res.ok) {
		throw new Error('Failed to fetch data');
	}
	return res.json();
}

export default async function Page() {
	const data = await getData();
	return <ConfigCards data={data} />;
}
