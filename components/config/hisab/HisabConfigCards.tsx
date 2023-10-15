import Card from '@/components/ui/card/Card';
import { basicFetchData } from '@/utils/fetch/basic-fetch';
import Link from 'next/link';
import { VscTypeHierarchy } from 'react-icons/vsc';

async function getDashboardInfo() {
	try {
		const response = await basicFetchData('config/hisab', {
			cache: 'no-store',
		});
		return response.json();
	} catch (error) {
		return [];
	}
}

const HisabConfigCards = async () => {
	const { types, users } = await getDashboardInfo();
	return (
		<div className="grid grid-cols-12 gap-4">
			<Link
				className="col-span-3"
				href="config/hisab/types"
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

export default HisabConfigCards;
