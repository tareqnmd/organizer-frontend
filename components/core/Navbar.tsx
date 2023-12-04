import Link from 'next/link';
import PrimaryLogoLink from './logo/PrimaryLogoLink';

const links = [
	{ path: '/hisab', name: 'Hisab' },
	{ path: '/note', name: 'Note' },
];

const Navbar = () => {
	return (
		<nav className="nav-links sticky top-0 z-50 w-full border-b backdrop-blur bg-background/50">
			<div className="container mx-auto flex items-center py-3 px-2 gap-2">
				<PrimaryLogoLink />
				{links.map((link) => (
					<Link
						key={link.path}
						href={link.path}
					>
						{link.name}
					</Link>
				))}
			</div>
		</nav>
	);
};

export default Navbar;
