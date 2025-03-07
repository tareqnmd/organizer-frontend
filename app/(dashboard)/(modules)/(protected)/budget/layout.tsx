import ModuleLayout from '@/components/layout/ModuleLayout';
import { getRoutes } from '@/lib/routes';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		template: '%s | Budget',
		default: 'Budget',
	},
};

const BudgetLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ModuleLayout links={getRoutes('module_budget')}>
			{children}
		</ModuleLayout>
	);
};

export default BudgetLayout;
