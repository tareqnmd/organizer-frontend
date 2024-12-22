'use client';

import useOutsideClick from '@/hooks/useOutsideClick';
import { getRoutes } from '@/lib/routes';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { useRef, useState } from 'react';
import NavLink from '../layout/NavLink';

const Sidebar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const asideRef = useRef<HTMLElement>(null);
	const { data: session } = useSession();
	const links = session
		? [...getRoutes('modules'), ...getRoutes('public_modules')]
		: [...getRoutes('public_modules'), ...getRoutes('public_links')];
	useOutsideClick(asideRef, () => setIsOpen(false), true);
	return (
		<>
			{!isOpen ? (
				<button onClick={() => setIsOpen(true)}>
					<Menu />
				</button>
			) : (
				<button onClick={() => setIsOpen(false)}>
					<X />
				</button>
			)}
			<aside
				ref={asideRef}
				className={cn(
					'theme fixed bottom-0 top-[57px] w-[220px] overflow-hidden border-l bg-background-light transition-all duration-300 dark:border-slate-700 dark:bg-background-dark',
					isOpen ? 'right-0' : '-right-[220px]',
				)}
			>
				<ul className="mx-6 my-3 flex flex-col items-start justify-center gap-2">
					{links.map((link) => (
						<li
							className="w-full border-b py-2 dark:border-slate-700"
							key={link.path}
						>
							<NavLink exact={false} link={link} />
						</li>
					))}
				</ul>
			</aside>
		</>
	);
};

export default Sidebar;
