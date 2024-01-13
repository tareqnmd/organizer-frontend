export async function GET() {
	const modules = [
		{
			name: 'Account',
			path: '/account',
			icon: 'account',
			description: 'Personal Financial Management',
		},
		{
			name: 'Note',
			path: '/note',
			icon: 'note',
			description: 'Personal Note Management',
		},
	];
	return Response.json({ data: modules });
}
