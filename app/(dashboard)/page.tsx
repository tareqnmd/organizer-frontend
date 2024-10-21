import Dashboard from '@/components/dashboard/Dashboard';
import { Routes } from '@/helper/routes';

const page = async () => {
	return (
		<main className="container mx-auto py-4">
			<Dashboard modules={Routes.modules} />
		</main>
	);
};

export default page;
