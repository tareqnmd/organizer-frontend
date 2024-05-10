export async function GET() {
	const modules = [
		{
			name: 'Budget',
			path: '/budget',
			icon: 'budget',
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
