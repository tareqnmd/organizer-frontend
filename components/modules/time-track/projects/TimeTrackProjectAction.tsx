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
			{project.status === 1 && (
				<TimeTrackingProjectEdit project={project} />
			)}
			{project.status === 1 && (
				<TimeTrackingProjectDelete project={project} />
			)}
			<TimeTrackingProjectToggle project={project} />
		</div>
	);
};

export default TimeTrackProjectAction;
