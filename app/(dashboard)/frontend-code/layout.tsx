import ModuleTabs from '@/components/ui/tab/ModuleTabs';

export const metadata = {
	title: 'M32T - Frontend Code',
	description: 'M32T - Frontend Code',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<ModuleTabs
				links={[
					{ path: '/frontend-code', name: 'Basic' },
					{ path: '/frontend-code/a-b-testing', name: 'A/b Testing' },
				]}
			/>
			<div className="overflow-hidden rounded-lg border bg-background shadow mt-2">
				{children}
			</div>
		</>
	);
}
