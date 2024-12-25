import { getTimeTrackTracks, TimeTrackType } from '@/lib/helper/time-track';
import TimeTrackCard from './TmeTrackCard';

const ActiveTimeTracks = async () => {
	const tracks = await getTimeTrackTracks({ isActive: true, limit: 5 });
	return (
		<div className="basic-card flex flex-col gap-3 active:scale-100">
			<strong className="font-semibold">Active Time Tracks</strong>
			{tracks?.length > 0 ? (
				<div className="flex flex-col gap-2">
					{tracks.map((track: TimeTrackType) => (
						<TimeTrackCard key={track.id} track={track} />
					))}
				</div>
			) : (
				<div className="text-sm">No active time tracks</div>
			)}
		</div>
	);
};

export default ActiveTimeTracks;
