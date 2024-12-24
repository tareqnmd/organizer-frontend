import { RouteType } from '@/lib/routes';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import Link from 'next/link';
import DynamicIcon from '../icons/DynamicLucideIcon';
import { Card } from '../ui/card';

const Module = ({ module }: { module: RouteType }) => {
	return (
		<Link href={module.path}>
			<Card className="basic-card flex h-full items-center gap-2">
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
					<span className="text-sm leading-none">
						{module.description}
					</span>
				</div>
			</Card>
		</Link>
	);
};

export default Module;
