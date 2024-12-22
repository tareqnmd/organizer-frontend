import ModuleLayout from '@/components/layout/ModuleLayout';
import { getRoutes } from '@/lib/routes';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: {
		template: '%s | Note',
		default: 'Note',
	},
};

const NoteLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<ModuleLayout links={getRoutes('module_note')}>{children}</ModuleLayout>
	);
};

export default NoteLayout;
