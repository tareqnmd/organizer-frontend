import { Card } from 'antd';
import Link from 'next/link';
import { Module } from './Dashboard';

const ModuleCard = ({ module }: { module: Module }) => {
	return (
		<Link href={module.path}>
			<Card
				extra={module.icon}
				title={module.name}
				size="small"
			>
				{module.description}
			</Card>
		</Link>
	);
};

export default ModuleCard;
