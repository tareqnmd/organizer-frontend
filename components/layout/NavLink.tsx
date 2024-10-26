'use client';
import { RouteType } from '@/lib/routes/types';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({
	link,
	exact = true,
	extraClass = '',
}: {
	link: RouteType;
	exact?: boolean;
	extraClass?: string;
}) => {
	const pathName = usePathname();
	return (
		<Link
			href={link.path}
			className={cn(
				'transition hover:font-semibold',
				(exact
					? pathName === link.path
					: pathName.includes(link.path)) && 'font-semibold',
				extraClass,
			)}
		>
			{link.name}
		</Link>
	);
};

export default NavLink;
