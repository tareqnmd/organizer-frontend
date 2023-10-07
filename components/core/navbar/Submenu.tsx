'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Submenu = ({ links }: any) => {
	const pathname = usePathname();
	return (
		<header className="flex items-center justify-end gap-4 p-2 bg-[#dfdfdf]">
			{links?.map((link: any, index: number) => (
				<Link
					key={index}
					href={link?.path}
					className={pathname === link?.path ? 'active-path' : ''}
				>
					<span>{link?.name}</span>
				</Link>
			))}
		</header>
	);
};

export default Submenu;
