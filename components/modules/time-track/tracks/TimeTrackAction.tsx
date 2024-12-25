import { TimeTrackType } from '@/lib/helper/time-track';
import TimeTrackDelete from './TimeTrackDelete';
import TimeTrackEdit from './TimeTrackEdit';
import TimeTrackStatus from './TimeTrackStatus';
import TimeTrackStopButton from './TimeTrackStopButton';

const TimeTrackAction = ({ track }: { track: TimeTrackType }) => {
	return (
		<div className="flex items-center gap-1">
			{track.isActive && <TimeTrackStopButton trackId={track.id} />}
			{track.status === 1 ? <TimeTrackEdit track={track} /> : null}
			<TimeTrackDelete track={track} />
			<TimeTrackStatus track={track} />
		</div>
	);
};

export default TimeTrackAction;
