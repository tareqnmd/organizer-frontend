import { RouteType } from '@/helper/shared/types';
import Module from './Module';

const Dashboard = ({ modules }: { modules: RouteType[] }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-content-center gap-4 h-full max-w-[800px] m-auto">
			{modules.map((module) => (
				<Module
					key={module.path}
					module={module}
				/>
			))}
		</div>
	);
};

export default Dashboard;
