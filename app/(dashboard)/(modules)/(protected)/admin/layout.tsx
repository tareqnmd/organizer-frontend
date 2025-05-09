import ModuleLayout from '@/components/layout/ModuleLayout';
import { getRoutes } from '@/lib/routes';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		template: '%s | Admin',
		default: 'Admin',
	},
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ModuleLayout links={getRoutes('module_admin')}>
			{children}
		</ModuleLayout>
	);
};

export default Layout;
