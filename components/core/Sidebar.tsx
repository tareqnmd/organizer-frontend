'use client';

import { getRoutes } from '@/helper/shared/routes';
import useOutsideClick from '@/hooks/useOutsideClick';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { useRef, useState } from 'react';
import NavLink from '../layout/NavLink';

const Sidebar = ({ user }: any) => {
	const [isOpen, setIsOpen] = useState(false);
	const asideRef: any = useRef();
	useOutsideClick(asideRef, () => setIsOpen(false), true);
	return (
		<>
			{!isOpen ? (
				<button
					className="md:hidden"
					onClick={() => setIsOpen(true)}
				>
					<Menu />
				</button>
			) : (
				<button
					className="md:hidden"
					onClick={() => setIsOpen(false)}
				>
					<X />
				</button>
			)}
			<aside
				ref={asideRef}
				className={cn(
					'md:hidden border-l dark:border-slate-700 theme fixed transition-all duration-300 w-[220px] overflow-hidden top-[57px] bottom-0 bg-light dark:bg-dark',
					isOpen ? 'right-0' : '-right-[220px]'
				)}
			>
				<ul className="flex flex-col items-start justify-center gap-2 my-3 mx-6">
					{user?.role === 'admin' && (
						<li className="border-b dark:border-slate-700 w-full py-2">
							<NavLink
								exact={false}
								link={{ name: 'Admin', path: '/admin' }}
							/>
						</li>
					)}
					{getRoutes('modules').map((link) => (
						<li
							className="border-b dark:border-slate-700 w-full py-2"
							key={link.path}
						>
							<NavLink
								exact={false}
								link={link}
							/>
						</li>
					))}
				</ul>
			</aside>
		</>
	);
};

export default Sidebar;
