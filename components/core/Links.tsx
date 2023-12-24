import { auth_options } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import Link from 'next/link';

const links = [
	{ name: 'Account', path: '/account' },
	{ name: 'Note', path: '/note' },
];

const Links = async () => {
	const session = await getServerSession(auth_options);
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
			{session ? (
				<>
					{session?.user?.role === 'admin' && (
						<li>
							<Link href="/admin">Admin</Link>
						</li>
					)}
					<li>
						<Link href="/profile">Profile</Link>
					</li>
					<li>
						<Link href="/api/auth/signout?callbackUrl=/">Logout</Link>
					</li>
				</>
			) : (
				<li>
					<Link href="/api/auth/signin">Login</Link>
				</li>
			)}
		</ul>
	);
};

export default Links;
