import CommonNavWrapper from '@/components/core/navbar/CommonNavWrapper';
import PrimaryLogo from '@/components/ui/logo/PrimaryLogo';
import Link from 'next/link';

const links = [{ path: '/video-player', name: 'Video Player', exact: true }];

const VideoPlayerNavbar = () => {
	return (
		<CommonNavWrapper>
			<Link href="/">
				<PrimaryLogo />
			</Link>
			{links?.map((link) => (
				<Link
					key={link.path}
					href={link.path}
				>
					{link.name}
				</Link>
			))}
		</CommonNavWrapper>
	);
};

export default VideoPlayerNavbar;
