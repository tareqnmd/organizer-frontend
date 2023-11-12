'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type ModuleLink = { path: string; name: string; exact?: boolean };
const ModuleTab = ({ link }: { link: ModuleLink }) => {
	const pathname = usePathname();
	const active = pathname === link.path;
	return (
		<Link
			className={active ? 'font-bold' : ''}
			href={link.path}
		>
			{link.name}
		</Link>
	);
};

export default ModuleTab;
