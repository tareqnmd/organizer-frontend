import ModuleLayout from '@/components/layout/ModuleLayout';
import { getRoutes } from '@/lib/routes';

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ModuleLayout links={getRoutes('module_admin')}>
			{children}
		</ModuleLayout>
	);
};

export default Layout;
