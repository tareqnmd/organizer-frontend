import { TimeTrackProjectType } from '@/lib/helper/time-track';
import TimeTrackingProjectDelete from './TimeTrackProjectDelete';
import TimeTrackingProjectEdit from './TimeTrackProjectEdit';
import TimeTrackingProjectToggle from './TimeTrackProjectStatus';

const TimeTrackProjectAction = ({
	project,
}: {
	project: TimeTrackProjectType;
}) => {
	return (
		<div className="flex items-center gap-1">
			<TimeTrackingProjectEdit project={project} />
			<TimeTrackingProjectToggle project={project} />
			<TimeTrackingProjectDelete project={project} />
		</div>
	);
};

export default TimeTrackProjectAction;
