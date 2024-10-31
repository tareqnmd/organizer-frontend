import { RouteType } from '@/lib/routes';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import Link from 'next/link';
import DynamicIcon from '../icons/DynamicLucideIcon';

const Module = ({ module }: { module: RouteType }) => {
	return (
		<Link href={module.path}>
			<div className="basic-shadow flex h-full items-center gap-2">
				{module?.icon ? (
					<DynamicIcon
						name={module.icon as keyof typeof dynamicIconImports}
						size={40}
					/>
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
