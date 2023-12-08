import Link from 'next/link';

const links = [
	{ name: 'Hisab', path: '/hisab' },
	{ name: 'Note', path: '/note' },
];

const Links = () => {
	return (
		<ul className="flex gap-2 text-sm">
			{links.map((link) => (
				<li key={link.path}>
					<Link href={link.path}>{link.name}</Link>
				</li>
			))}
		</ul>
	);
};

export default Links;
