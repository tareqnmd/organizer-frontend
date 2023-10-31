import Card from '@/components/ui/card/Card';
import Link from 'next/link';
import { FiUsers } from 'react-icons/fi';

const ConfigCards = async ({ data }: any) => {
	const { users } = data;
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
