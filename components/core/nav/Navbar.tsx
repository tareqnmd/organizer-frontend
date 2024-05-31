import Link from 'next/link';
import Logo from '../Logo';
import Links from './Links';

const Navbar = () => {
	return (
		<nav className="sticky top-0 z-50 shadow bg-white transition duration-500 w-screen">
			<div className="container py-4 mx-auto flex flex-wrap items-center justify-between">
				<Link href="/">
					<Logo />
				</Link>
				<Links />
			</div>
		</nav>
	);
};

export default Navbar;
