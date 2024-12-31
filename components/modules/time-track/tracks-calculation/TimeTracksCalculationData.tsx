import { TimeTrackType } from '@/lib/helper/time-track';
import { cn } from '@/lib/utils';
import { baseDateTimeFormat } from '@/lib/utils/date';

const TimeTracksCalculationData = ({ tracks }: { tracks: TimeTrackType[] }) => {
	const updatedTracks = tracks.map((track) => {
		return {
			...track,
			timeExtra: track.timeTracked - track.baseTime ?? 0,
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
		<div className="overflow-x-auto rounded-md border">
			<div className="w-full min-w-max text-sm text-light dark:text-dark">
				<div className="grid grid-cols-5 gap-4 bg-dark/90 font-medium dark:bg-light/90">
					<div className="p-2">Start Time</div>
					<div className="p-2">End Time</div>
					<div className="p-2">Base Time</div>
					<div className="p-2">Time Tracked</div>
					<div className="p-2">Time Calculated</div>
				</div>
				{updatedTracks.map((track, index) => (
					<div
						className={cn(
							'grid grid-cols-5 gap-4',
							index === 0
								? 'bg-dark/60 dark:bg-light/60'
								: 'bg-dark/70 dark:bg-light/70',
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
							{formattedMinutes(track.baseTime)}
						</div>
						<div className="p-2">
							{formattedMinutes(track.timeTracked)}
						</div>
						<div className="p-2">
							{formattedMinutes(track.timeExtra)}
						</div>
					</div>
				))}
				<div className="grid grid-cols-5 gap-4 bg-dark/90 font-medium dark:bg-light/90">
					<div className="p-2">Total</div>
					<div className="p-2"></div>
					<div className="p-2"></div>
					<div className="p-2">
						{formattedMinutes(totalTimeTracked)}
					</div>
					<div className="p-2">
						{formattedMinutes(totalTimeExtra)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default TimeTracksCalculationData;
