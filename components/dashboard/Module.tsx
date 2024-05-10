import Link from 'next/link';
import DynamicLucideIcon from '../icon/DynamicLucideIcon';
import { Card, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { ModuleType } from './Dashboard';

const Module = ({ module }: { module: ModuleType }) => {
	return (
		<Link href={module.path}>
			<Card className="hover:shadow-md transition p-0">
				<CardHeader className="p-2">
					<CardTitle className="text-lg w-full flex items-center justify-between">
						<span>{module.name}</span>
						<DynamicLucideIcon
							name={
								module.icon === 'budget'
									? 'badge-dollar-sign'
									: module.icon === 'note'
									? 'sticky-note'
									: 'badge'
							}
							size={20}
						/>
					</CardTitle>
					<CardDescription className="!m-0">
						{module.description}
					</CardDescription>
				</CardHeader>
			</Card>
		</Link>
	);
};

export default Module;
