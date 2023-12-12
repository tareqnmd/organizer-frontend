import { Card } from 'antd';
import Link from 'next/link';
import { ModuleType } from './Dashboard';

const Module = ({ module }: { module: ModuleType }) => {
	return (
		<Link href={module.path}>
			<Card
				className="hover:shadow-md transition"
				extra={module.icon}
				title={module.name}
				size="small"
			>
				{module.description}
			</Card>
		</Link>
	);
};

export default Module;
