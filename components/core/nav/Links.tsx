import { getServerSession } from 'next-auth';
import { ModeToggle } from './ModeToggle';
import { UserOptions } from './UserOptions';

import NavLink from '@/components/layout/NavLink';
import { authOptions } from '@/lib/auth-options';
import { Routes } from '@/lib/helper/routes';
const Links = async () => {
	const session = await getServerSession(authOptions);
	return (
		<ul className="flex items-center gap-2 text-sm">
			{session?.user?.role === 'admin' && (
				<li>
					<NavLink
						exact={false}
						link={{ name: 'Admin', path: '/admin' }}
					/>
				</li>
			)}
			{Routes.modules.map((link) => (
				<li key={link.path}>
					<NavLink
						exact={false}
						link={link}
					/>
				</li>
			))}
			<UserOptions user={session?.user} />
			<ModeToggle />
		</ul>
	);
};

export default Links;
