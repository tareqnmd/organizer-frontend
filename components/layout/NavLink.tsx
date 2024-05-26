'use client';
import { cn } from '@/lib/utils';
import { LinkType } from '@/types/link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({
	link,
	exact = true,
}: {
	link: LinkType;
	exact?: boolean;
}) => {
	const pathName = usePathname();
	return (
		<Link
			href={link.path}
			className={cn(
				'transition hover:underline',
				(exact ? pathName === link.path : pathName.includes(link.path)) &&
					'underline'
			)}
		>
			{link.name}
		</Link>
	);
};

export default NavLink;
