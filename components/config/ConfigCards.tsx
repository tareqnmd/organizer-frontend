import Card from '@/components/ui/card/Card';
import { basicFetchData } from '@/utils/fetch/basic-fetch';
import Link from 'next/link';
import { FiUsers } from 'react-icons/fi';

async function getDashboardInfo() {
	try {
		const response = await basicFetchData('dashboard', {
			cache: 'no-store',
		});
		return response.json();
	} catch (error) {
		return [];
	}
}

const ConfigCards = async () => {
	const { types, users } = await getDashboardInfo();
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
