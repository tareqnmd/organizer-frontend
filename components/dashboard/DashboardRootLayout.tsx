import Link from 'next/link';

const DashboardRootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div>
			<div className="flex justify-end gap-4">
				<Link
					className="border-b-2 border-gray-950"
					href="/dashboard/users"
				>
					Users
				</Link>
				<Link
					className="border-b-2 border-gray-950"
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
