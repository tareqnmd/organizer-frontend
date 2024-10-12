import CustomModuleLayout from '@/components/layout/CustomModuleLayout.tsx';
import TaskModuleLayout from '@/components/modules/task/TaskModuleLayout';
import { Metadata } from 'next';
const links = [{ name: 'Tasks', path: '/task' }];

export const metadata: Metadata = {
	title: {
		template: '%s | Task',
		default: 'Task',
	},
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<CustomModuleLayout extraSection={<TaskModuleLayout />}>
			{children}
		</CustomModuleLayout>
	);
};

export default Layout;
