import NoteLayout from '@/components/note/core/NoteLayout';
import '@/styles/note.scss';

export const metadata = {
	title: 'M32T - Note',
	description: 'M32T - Note By Tareqnmd',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <NoteLayout>{children}</NoteLayout>;
}
