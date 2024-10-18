import ModuleLayout from '@/components/layout/ModuleLayout';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		template: '%s | Task',
		default: 'Task',
	},
};

const links = [
	{
		name: 'Dashboard',
		path: '/todo',
	},
	{
		name: 'Workspaces',
		path: '/todo/workspaces',
	},
	{
		name: 'Boards',
		path: '/todo/boards',
	},
];

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <ModuleLayout links={links}>{children} </ModuleLayout>;
};

export default Layout;
