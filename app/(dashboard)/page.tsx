import Dashboard from '@/components/dashboard/Dashboard';
import { authOptions } from '@/lib/auth-options';
import { getRoutes } from '@/lib/routes';
import { getServerSession } from 'next-auth';

const DashboardPage = async () => {
	const {
		user: { email },
	} = (await getServerSession(authOptions())) || {
		user: { email: null },
	};
	const links = email
		? [...getRoutes('modules'), ...getRoutes('public_modules')]
		: getRoutes('public_modules');

	return (
		<main className="container mx-auto py-4">
			<Dashboard modules={links} loggedIn={!!email} />
		</main>
	);
};

export default DashboardPage;
