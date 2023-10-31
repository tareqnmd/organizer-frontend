import Card from '@/components/ui/card/Card';
import { basicFetchData } from '@/utils/fetch/basic-fetch';
import Link from 'next/link';
import { FiUsers } from 'react-icons/fi';

async function getDashboardInfo() {
	try {
		const response = await basicFetchData('config', {
			cache: 'no-store',
		});
		return response.json();
	} catch (error) {
		throw new Error('Failed to fetch data');
	}
}

const ConfigCards = async () => {
	const { users } = await getDashboardInfo();
	return (
		<div className="grid grid-cols-12 gap-4">
			<Link
				className="col-span-3"
				href="config/users"
			>
				<Card
					title="Users"
					value={users?.count ?? 0}
					icon={<FiUsers />}
				/>
			</Link>
		</div>
	);
};

export default ConfigCards;
