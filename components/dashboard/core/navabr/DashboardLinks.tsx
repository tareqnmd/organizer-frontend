'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardLinks = () => {
	const pathname = usePathname();

	return (
		<>
			<Link
				href="/config"
				className={pathname.includes('/config') ? 'active-path' : ''}
			>
				Config
			</Link>
		</>
	);
};

export default DashboardLinks;
