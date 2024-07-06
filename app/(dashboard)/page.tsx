import Dashboard from '@/components/dashboard/Dashboard';
import { modules } from '../../lib/helper/modules';

const page = async () => {
	return (
		<main className="container mx-auto py-4">
			<Dashboard modules={modules} />
		</main>
	);
};

export default page;
