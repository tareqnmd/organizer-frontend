import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		name: 'Organizer',
		short_name: 'Organizer',
		description: 'Organizer by Tareqnmd',
		start_url: '/',
		display: 'standalone',
		background_color: '#fff',
		theme_color: '#fff',
		icons: [
			{
				src: '/favicon.ico',
				sizes: 'any',
				type: 'image/x-icon',
			},
		],
	};
}
