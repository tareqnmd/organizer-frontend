import { getTimeTrackTracks } from '@/lib/helper/time-track/service';
import TimeTrackTracksTable from './TimeTrackTracksTable';

const TimeTracks = async () => {
	const tracks = await getTimeTrackTracks();
	return <TimeTrackTracksTable tracks={tracks} />;
};

export default TimeTracks;
