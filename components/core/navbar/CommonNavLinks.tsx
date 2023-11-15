'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export type linkType = { path: string; name: string; exact?: boolean }[];

const CommonNavLinks = ({ links }: { links: linkType }) => {
	const pathname = usePathname();

	return links.map((link) => (
		<Link
			key={link.path}
			href={link.path}
			className={pathname === link.path ? 'active' : ''}
		>
			{link.name}
		</Link>
	));
};

export default CommonNavLinks;
