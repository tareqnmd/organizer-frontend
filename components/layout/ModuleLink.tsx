'use client';
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { LinkType } from './ModuleLayout';
import Link from 'next/link';

const ModuleLink = ({ link }: { link: LinkType }) => {
	const pathName = usePathname();
	return (
		<Link
			href={link.path}
			className={cn(
				'transition hover:underline',
				pathName.includes(link.path) && 'underline'
			)}
		>
			{link.name}
		</Link>
	);
};

export default ModuleLink;
