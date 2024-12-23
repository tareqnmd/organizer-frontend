import { Card } from '@/components/ui/card';
import {
	formatTimeFromMinutes,
	TimeTrackProjectType,
} from '@/lib/helper/time-track';
import TimeTrackingProjectAction from './TimeTrackProjectAction';

const TimeTrackProject = async ({
	project,
}: {
	project: TimeTrackProjectType;
}) => {
	return (
		<Card className="basic-card">
			<div className="flex flex-wrap items-center justify-between gap-1">
				<div className="flex items-center gap-1">
					<span className="font-medium">{project.name}</span>
					{project?.baseTime ? (
						<span className="text-sm font-semibold">
							({formatTimeFromMinutes(project.baseTime)})
						</span>
					) : null}
				</div>
				<TimeTrackingProjectAction project={project} />
			</div>
		</Card>
	);
};

export default TimeTrackProject;
