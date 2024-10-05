'use client';
import { cn } from '@/lib/utils';
import { LinkType } from '@/types/link';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({
	link,
	exact = true,
	extraClass = '',
}: {
	link: LinkType;
	exact?: boolean;
	extraClass?: string;
}) => {
	const pathName = usePathname();
	return (
		<Link
			href={link.path}
			className={cn(
				'transition hover:font-semibold',
				(exact ? pathName === link.path : pathName.includes(link.path)) &&
					'font-semibold',
				extraClass
			)}
		>
			{link.name}
		</Link>
	);
};

export default NavLink;
