import Link from 'next/link';
import DynamicIcon from '../icon/DynamicLucideIcon';
import { ModuleType } from './Dashboard';

const Module = ({ module }: { module: ModuleType }) => {
	return (
		<Link href={module.path}>
			<div className="shadow border p-3 rounded-md flex items-center gap-2 text-medium">
				{module?.icon ? (
					<DynamicIcon
						name={module.icon}
						size={40}
					/>
				) : null}
				<div className="flex flex-col gap-1">
					<h3 className="font-bold leading-none">{module.name}</h3>
					<p className="leading-none">{module.description}</p>
				</div>
			</div>
		</Link>
	);
};

export default Module;
