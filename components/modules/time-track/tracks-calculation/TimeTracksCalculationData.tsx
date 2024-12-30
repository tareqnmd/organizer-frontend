import { TimeTrackType } from '@/lib/helper/time-track';
import { cn } from '@/lib/utils';
import { baseDateTimeFormat } from '@/lib/utils/date';

const TimeTracksCalculationData = ({ tracks }: { tracks: TimeTrackType[] }) => {
	const updatedTracks = tracks.map((track) => {
		return {
			...track,
			timeExtra: track.timeTracked - track.baseTime,
		};
	});

	const totalTimeTracked = updatedTracks.reduce(
		(acc, track) => acc + track.timeTracked,
		0,
	);

	const totalTimeExtra = updatedTracks.reduce(
		(acc, track) => acc + track.timeExtra,
		0,
	);

	const formattedMinutes = (minutes: number) =>
		new Intl.NumberFormat(undefined, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(minutes);

	return (
		<div className="overflow-x-auto rounded-md">
			<div className="w-full min-w-max text-sm">
				<div className="grid grid-cols-4 gap-4 bg-gray-400">
					<div className="p-2">Start Time</div>
					<div className="p-2">End Time</div>
					<div className="p-2">Time Tracked</div>
					<div className="p-2">Time Extra</div>
				</div>
				{updatedTracks.map((track, index) => (
					<div
						className={cn(
							'grid grid-cols-4 gap-4',
							index === 0 ? 'bg-gray-200' : 'bg-gray-300',
						)}
						key={track.id}
					>
						<div className="p-2">
							{baseDateTimeFormat(track.startTime)}
						</div>
						<div className="p-2">
							{baseDateTimeFormat(track.endTime)}
						</div>
						<div className="p-2">
							{formattedMinutes(track.timeTracked)}
						</div>
						<div className="p-2">
							{formattedMinutes(track.timeExtra)}
						</div>
					</div>
				))}
				<div className="grid grid-cols-4 gap-4 border">
					<div className="p-2"></div>
					<div className="p-2"></div>
					<div className="p-2 font-bold">
						{formattedMinutes(totalTimeTracked)}
					</div>
					<div className="p-2 font-bold">
						{formattedMinutes(totalTimeExtra)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TimeTracksCalculationData;
