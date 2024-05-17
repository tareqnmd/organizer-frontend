import { authOptions } from '@/lib/auth-options';
import { getServerSession } from 'next-auth';
import Link from 'next/link';
import { ModeToggle } from './ModeToggle';
import { UserOptions } from './UserOptions';

const links = [
	{ name: 'Budget', path: '/budget' },
	{ name: 'Note', path: '/note' },
];

const Links = async () => {
	const session = await getServerSession(authOptions);
	return (
		<ul className="flex items-center gap-2 text-sm">
			{session?.user?.role === 'admin' && (
				<li>
					<Link
						className="transition hover:underline"
						href="/admin"
					>
						Admin
					</Link>
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
			<UserOptions image={session?.user?.image} />
			<ModeToggle />
		</ul>
	);
};

export default Links;
