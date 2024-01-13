import Module from './Module';

export type ModuleType = {
	name: string;
	path: string;
	icon: string;
	description: string;
};
type ModulesType = ModuleType[];

const Dashboard = ({ modules }: { modules: ModulesType }) => {
	return (
		<div className="flex gap-4 items-center justify-center h-full">
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
