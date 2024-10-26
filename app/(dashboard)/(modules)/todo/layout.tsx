import ModuleLayout from '@/components/layout/ModuleLayout';
import { getRoutes } from '@/lib/routes';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		template: '%s | Task',
		default: 'Task',
	},
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ModuleLayout links={getRoutes('module_todo')}>{children}</ModuleLayout>
	);
};

export default Layout;
