import { getServerSession } from 'next-auth';
import { ModeToggle } from './ModeToggle';
import { UserOptions } from './UserOptions';

const links = [
	{ name: 'Budget', path: '/budget' },
	{ name: 'Note', path: '/note' },
];

import NavLink from '@/components/layout/NavLink';
import { authOptions } from '@/lib/auth-options';
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
			{links.map((link) => (
				<li key={link.path}>
					<NavLink
						exact={false}
						link={link}
					/>
				</li>
			))}
			<UserOptions image={session?.user?.image} />
			<ModeToggle />
		</ul>
	);
};

export default Links;
