import { Card } from '@/components/ui/card';
import { Routes } from '@/lib/routes/enums';
import { generateDataFromServer, nextProperties } from '@/lib/utils/fetch';
import Link from 'next/link';

// switch case route select
const routes = (type: string) => {
	switch (type) {
		case 'users':
			return Routes.ADMIN_USERS;
		default:
			return Routes.ADMIN_USERS;
	}
};

const AdminDashboard = async () => {
	const url = `admin/dashboard`;
	const { data: dashboardInfo } = await generateDataFromServer(
		url,
		nextProperties({}),
	);

	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
			{dashboardInfo?.map(
				(info: { type: string; value: number; label: string }) => (
					<Link key={info.type} href={routes(info.type)}>
						<Card className="basic-card flex flex-col items-center justify-center gap-1">
							<strong>{info.label}</strong>
							<p>{info.value}</p>
						</Card>
					</Link>
				),
			)}
		</div>
	);
};

export default AdminDashboard;
