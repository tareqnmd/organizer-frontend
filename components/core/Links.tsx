import { auth_options } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

const links = [
	{ name: 'Account', path: '/account' },
	{ name: 'Note', path: '/note' },
	{ name: 'Profile', path: '/profile' },
	{ name: 'Log Out', path: '/api/auth/signout?callbackUrl=/' },
];

const Links = async () => {
	const session = await getServerSession(auth_options);
	return (
		<ul className="flex gap-2 text-sm">
			{session?.user?.role === 'admin' && (
				<li>
					<Link href="/admin">Admin</Link>
				</li>
			)}
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
