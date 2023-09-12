'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DashboardRootLayout = ({ children }: { children: React.ReactNode }) => {
	const pathname = usePathname();
	const check_active_path = (url: string) => {
		return pathname.includes(url);
	};
	return (
		<div>
			<div className="flex justify-end rounded-md shadow-sm mb-2">
				<Link
					className={`inline-flex items-center px-4 py-2 text-sm font-medium border border-[#0B2447] rounded-l-lg ${
						check_active_path('/dashboard/users')
							? 'bg-[#0B2447] text-white'
							: ''
					}`}
					href="/dashboard/users"
				>
					Users
				</Link>
				<Link
					className={`inline-flex items-center px-4 py-2 text-sm font-medium border border-[#0B2447] rounded-r-lg ${
						check_active_path('/dashboard/types')
							? 'bg-[#0B2447] text-white'
							: ''
					}`}
					href="/dashboard/types"
				>
					Types
				</Link>
			</div>
			{children}
		</div>
	);
};

export default DashboardRootLayout;
