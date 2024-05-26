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
			{
				src: '/android-chrome-192x192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/android-chrome-512x512.png',
				sizes: '512x512',
				type: 'image/png',
			},
			{
				src: '/apple-touch-icon.png',
				sizes: '180x180',
				type: 'image/png',
			},
			{
				src: '/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png',
			},
			{
				src: '/favicon-16x16.png',
				sizes: '16x16',
				type: 'image/png',
			},
		],
	};
}
