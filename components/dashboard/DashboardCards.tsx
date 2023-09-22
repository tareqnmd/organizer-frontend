import { basicFetchData } from '@/utils/fetch/basic-fetch';
import Link from 'next/link';
import { FiUsers } from 'react-icons/fi';
import { VscTypeHierarchy } from 'react-icons/vsc';
import Card from '../ui/card/Card';

async function getDashboardInfo() {
	try {
		const response = await basicFetchData('dashboard', {
			next: { tags: ['dashboard_cards'] },
		});
		return response.json();
	} catch (error) {
		return [];
	}
}

const DashboardCards = async () => {
	const { types, users } = await getDashboardInfo();
	return (
		<div className="grid grid-cols-12 gap-4">
			<Link
				className="col-span-3"
				href="/dashboard/users"
			>
				<Card
					title="Users"
					value={users?.count ?? 0}
					icon={<FiUsers />}
				/>
			</Link>
			<Link
				className="col-span-3"
				href="/dashboard/types"
			>
				<Card
					title="Types"
					icon={<VscTypeHierarchy />}
					value={types?.count ?? 0}
				/>
			</Link>
		</div>
	);
};

export default DashboardCards;
