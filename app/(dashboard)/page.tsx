import Dashboard from '@/components/dashboard/Dashboard';
import { getRoutes } from '@/lib/routes';

const page = async () => {
	return (
		<main className="container mx-auto py-4">
			<Dashboard modules={getRoutes('modules')} />
		</main>
	);
};

export default page;
