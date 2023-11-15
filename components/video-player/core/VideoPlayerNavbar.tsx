import CommonNavLinks from '@/components/core/navbar/CommonNavLinks';
import CommonNavWrapper from '@/components/core/navbar/CommonNavWrapper';

const links = [{ path: '/video-player', name: 'Video Player', exact: true }];

const VideoPlayerNavbar = () => {
	return (
		<CommonNavWrapper>
			<CommonNavLinks links={links} />
		</CommonNavWrapper>
	);
};

export default VideoPlayerNavbar;
