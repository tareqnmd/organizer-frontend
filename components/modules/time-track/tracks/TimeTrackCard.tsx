import { TimeTrackType } from '@/lib/helper/time-track';
import { baseDateTimeFormat } from '@/lib/utils';
import TimeTrackStopButton from './TimeTrackStopButton';
import TrackingTimeCounting from './TimeTrackCounting';

const TimeTrackCard = ({ track }: { track: TimeTrackType }) => {
	return (
		<div className="flex flex-col gap-1">
			<div className="flex items-center justify-between gap-1">
				<div className="flex items-center gap-1">
					<span className="text-sm font-medium">
						{track.projectName}
					</span>
					{track.isActive && (
						<TimeTrackStopButton trackId={track.id} />
					)}
				</div>
				<TrackingTimeCounting
					timeTracked={track.timeTracked}
					isActive={track.isActive}
					startTime={track.startTime}
				/>
			</div>
			<div className="flex flex-wrap items-center gap-2">
				<span className="text-sm text-gray-500">
					{baseDateTimeFormat(track?.startTime)}
				</span>
				<span className="text-sm text-gray-500">
					{baseDateTimeFormat(track?.endTime)}
				</span>
			</div>
		</div>
	);
};

export default TimeTrackCard;
