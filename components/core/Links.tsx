import Link from 'next/link';

const links = [
	{ name: 'Account', path: '/account' },
	{ name: 'Note', path: '/note' },
	{ name: 'Login', path: '/login' },
	{ name: 'Profile', path: '/profile' },
];

const Links = () => {
	return (
		<ul className="flex gap-2 text-sm">
			{links.map((link) => (
				<li key={link.path}>
					<Link
						className="transition hover:underline"
						href={link.path}
					>
						{link.name}
					</Link>
				</li>
			))}
		</ul>
	);
};

export default Links;
