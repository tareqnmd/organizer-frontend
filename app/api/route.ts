export async function GET() {
	const modules = [
		{
			name: 'Hisab',
			path: '/hisab',
			icon: 'hisab',
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
