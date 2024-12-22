import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import Logo from '../Logo';
import Sidebar from '../Sidebar';
import Links from './Links';
import { ModeToggle } from './ModeToggle';
import { UserOptions } from './UserOptions';

const Navbar = async () => {
	const { user = null } = (await getServerSession(authOptions())) || {
		user: null,
	};
	return (
		<nav className="sticky top-0 z-50 w-dvw bg-light shadow transition duration-500 dark:bg-dark dark:shadow-slate-700">
			<div className="container mx-auto flex flex-wrap items-center justify-between py-4">
				<Link href="/">
					<Logo />
				</Link>
				<Links />
				<div className="flex items-center gap-2 md:gap-4">
					{user ? <UserOptions user={user} /> : null}
					<ModeToggle />
					<Sidebar />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
