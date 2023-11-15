import PlannerLayout from '@/components/planner/core/PlannerLayout';
import '@/styles/planner.scss';

export const metadata = {
	title: 'M32T - Planner',
	description: 'M32T - Planner By Tareqnmd',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <PlannerLayout>{children}</PlannerLayout>;
}
