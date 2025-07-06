import { getTimeTrackTracks, TimeTrackType } from '@/lib/helper/time-track';
import TimeTrackCard from './TimeTrackCard';

const TimeTracksRecent = async () => {
	const tracks = await getTimeTrackTracks({ limit: 5, isActive: false });
	return (
		<div className="basic-card flex flex-col gap-3 active:scale-100">
			<strong className="font-semibold">Recent Time Tracks</strong>
			{tracks?.length > 0 ? (
				<div className="flex flex-col gap-2">
					{tracks.map((track: TimeTrackType) => (
						<TimeTrackCard key={track.id} track={track} />
					))}
				</div>
			) : (
				<div className="text-sm">No recent time tracks</div>
			)}
		</div>
	);
};

export default TimeTracksRecent;
