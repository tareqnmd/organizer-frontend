import ModuleLayout from '@/components/layout/ModuleLayout';
import { getRoutes } from '@/lib/routes';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		template: '%s | Time Tracking',
		default: 'Time Tracking',
	},
};

const TimeTrackingLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ModuleLayout links={getRoutes('module_todo')}>{children}</ModuleLayout>
	);
};

export default TimeTrackingLayout;
