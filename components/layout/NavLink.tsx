'use client';
import { RouteType } from '@/lib/routes';
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
				'font-medium text-gray-500 transition hover:text-light-text dark:hover:text-dark-text',
				(exact
					? pathName === link.path
					: pathName.includes(link.path)) &&
					'text-light-text dark:text-dark-text',
				extraClass,
			)}
		>
			{link.name}
		</Link>
	);
};

export default NavLink;
