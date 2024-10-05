import ModuleLayout from '@/components/layout/ModuleLayout';
import { Metadata } from 'next';
const links = [{ name: 'Tasks', path: '/task' }];

export const metadata: Metadata = {
	title: {
		template: '%s | Task',
		default: 'Task',
	},
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <ModuleLayout links={links}>{children}</ModuleLayout>;
};

export default Layout;
