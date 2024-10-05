import Module from './Module';

export type ModuleType = {
	name: string;
	path: string;
	icon: any;
	description: string;
};
type ModulesType = ModuleType[];

const Dashboard = ({ modules }: { modules: ModulesType }) => {
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
