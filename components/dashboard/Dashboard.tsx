import ModuleCard from './ModuleCard';

export type Module = {
	name: string;
	path: string;
	icon: string;
	description: string;
};
type Modules = Module[];

const Dashboard = ({ modules }: { modules: Modules }) => {
	return (
		<div className="flex gap-4 items-center justify-center h-full">
			{modules.map((module) => (
				<ModuleCard
					key={module.path}
					module={module}
				/>
			))}
		</div>
	);
};

export default Dashboard;
