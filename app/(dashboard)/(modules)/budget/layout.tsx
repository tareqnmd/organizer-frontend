import ModuleLayout from '@/components/layout/ModuleLayout';
import { Metadata } from 'next';
const links = [
	{ name: 'Dashboard', path: '/budget' },
	{ name: 'Transaction', path: '/budget/transaction' },
	{ name: 'Type', path: '/budget/type' },
	{ name: 'Category', path: '/budget/type-category' },
];

export const metadata: Metadata = {
	title: 'Budget',
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <ModuleLayout links={links}>{children}</ModuleLayout>;
};

export default Layout;
