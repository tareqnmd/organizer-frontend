import { RouteType } from '@/lib/routes';
import Module from './Module';

const Dashboard = ({ modules }: { modules: RouteType[] }) => {
	return (
		<div className="m-auto grid h-full max-w-[800px] grid-cols-1 place-content-center gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{modules.map((module) => (
				<Module key={module.path} module={module} />
			))}
		</div>
	);
};

export default Dashboard;
