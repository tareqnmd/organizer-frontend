import ModuleLayout from '@/components/layout/ModuleLayout';
import { Metadata } from 'next';
const links = [
	{ name: 'Dashboard', path: '/note' },
	{ name: 'Notes', path: '/note/all' },
	{ name: 'Starred', path: '/note/starred' },
];

export const metadata: Metadata = {
	title: {
		template: '%s | Note',
		default: 'Note',
	},
};

const Layout = ({ children }: { children: React.ReactNode }) => {
	return <ModuleLayout links={links}>{children}</ModuleLayout>;
};

export default Layout;
