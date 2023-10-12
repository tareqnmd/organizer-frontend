'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Submenu = ({ links }: any) => {
	const pathname = usePathname();
	return (
		<header className="bg-[#dfdfdf]">
			<div className="container py-3 px-2 m-auto flex items-center justify-end gap-4">
				{links?.map((link: any, index: number) => (
					<Link
						key={index}
						href={link?.path}
						className={
							(
								link?.exact
									? pathname === link?.path
									: pathname.includes(link?.path)
							)
								? 'active-path'
								: ''
						}
					>
						<span>{link?.name}</span>
					</Link>
				))}
			</div>
		</header>
	);
};

export default Submenu;
