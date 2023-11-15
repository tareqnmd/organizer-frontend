import VideoPlayerFooter from './VideoPlayerFooter';
import VideoPlayerNavbar from './VideoPlayerNavbar';

const VideoPlayerLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div id="video_player">
			<VideoPlayerNavbar />
			<main>{children}</main>
			<VideoPlayerFooter />
		</div>
	);
};

export default VideoPlayerLayout;
