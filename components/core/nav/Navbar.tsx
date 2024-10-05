import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import Logo from '../Logo';
import Sidebar from '../Sidebar';
import Links from './Links';
import { ModeToggle } from './ModeToggle';
import { UserOptions } from './UserOptions';

const Navbar = async () => {
	const session = await getServerSession(authOptions);
	return (
		<nav className="sticky top-0 z-50 shadow dark:shadow-slate-700 bg-light dark:bg-dark transition duration-500 w-dvw">
			<div className="container py-4 mx-auto flex flex-wrap items-center justify-between">
				<Link href="/">
					<Logo />
				</Link>
				<Links />
				<div className="flex gap-4">
					<UserOptions user={session?.user} />
					<ModeToggle />
					<Sidebar />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
