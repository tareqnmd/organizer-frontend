import { TimeTrackType } from '@/lib/helper/time-track';
import { cn } from '@/lib/utils';
import { baseDateTimeFormat } from '@/lib/utils/date';
import TimeTrackCounting from '../tracks/TimeTrackCounting';

const TimeTracksCalculationData = ({ tracks }: { tracks: TimeTrackType[] }) => {
	const currentTime = new Date();
	const updatedTracks = tracks.map((track) => {
		const timeDifference =
			(currentTime.getTime() - new Date(track.startTime).getTime()) /
			60000;
		const timeTracked = track?.isActive
			? Math.floor(timeDifference)
			: track?.timeTracked;
		return {
			...track,
			timeTracked,
			timeExtra: timeTracked - (track?.baseTime ?? 0),
		};
	});

	const totalTimeExtra = updatedTracks.reduce(
		(acc, track) => acc + track.timeExtra,
		0,
	);

	const formattedMinutes = (minutes: number) =>
		new Intl.NumberFormat(undefined, {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		}).format(minutes) + ' min';

	return (
		<>
			<div>Base Time: {formattedMinutes(tracks[0].baseTime)}</div>
			<div className="overflow-x-auto rounded-md border">
				<div className="w-full min-w-max text-sm text-light dark:text-dark">
					<div className="grid grid-cols-4 gap-4 bg-dark/90 font-medium dark:bg-light/90">
						<div className="p-2">Start Time</div>
						<div className="p-2">End Time</div>
						<div className="p-2">Time Tracked</div>
						<div className="p-2">Time Calculated</div>
					</div>
					{updatedTracks.map((track, index) => (
						<div
							className={cn(
								'grid grid-cols-4 gap-4',
								index % 2 === 0
									? 'bg-dark/60 dark:bg-light/60'
									: 'bg-dark/70 dark:bg-light/70',
							)}
							key={track.id}
						>
							<div className="flex gap-1 p-2">
								{baseDateTimeFormat(track.startTime)}
								{track.isActive && (
									<span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-status-neutral duration-500 dark:bg-status-success"></span>
								)}
							</div>
							<div className="p-2">
								{baseDateTimeFormat(track.endTime) ?? 'N/A'}
							</div>
							<div className="p-2">
								<TimeTrackCounting
									timeTracked={track.timeTracked}
									isActive={track.isActive}
									startTime={track.startTime}
								/>
							</div>
							<div className="p-2">
								{formattedMinutes(track.timeExtra)}
							</div>
						</div>
					))}
					<div className="grid grid-cols-4 gap-4 bg-dark/90 font-medium dark:bg-light/90">
						<div className="p-2">Total</div>
						<div className="p-2"></div>
						<div className="p-2"></div>
						<div className="p-2 text-light">
							<span
								className={cn(
									'rounded-md px-2 py-1',
									totalTimeExtra > 0
										? 'bg-status-success'
										: 'bg-status-danger',
								)}
							>
								{formattedMinutes(totalTimeExtra)}
							</span>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TimeTracksCalculationData;
