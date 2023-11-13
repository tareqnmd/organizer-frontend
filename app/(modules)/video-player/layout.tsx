import VideoPlayerLayout from '@/components/video-player/core/VideoPlayerLayout';
import '@/styles/video-player.scss';

export const metadata = {
	title: 'M32T - Video Player',
	description: 'M32T - Video Player By Tareqnmd',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <VideoPlayerLayout>{children}</VideoPlayerLayout>;
}
