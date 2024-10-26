import { RouteType } from '@/lib/routes/types';
import Link from 'next/link';
import DynamicIcon from '../icons/DynamicLucideIcon';

const Module = ({ module }: { module: RouteType }) => {
	return (
		<Link href={module.path}>
			<div className="flex items-center gap-2 rounded-md border p-3 text-dark shadow">
				{module?.icon ? (
					<DynamicIcon name={module.icon as any} size={40} />
				) : null}
				<div className="flex flex-col gap-1">
					<h3 className="font-semibold leading-none">
						{module.name}
					</h3>
					<p className="leading-none">{module.description}</p>
				</div>
			</div>
		</Link>
	);
};

export default Module;
