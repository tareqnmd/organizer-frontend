import { Card } from '@/components/ui/card';
import {
	getTimeTrackProjects,
	TimeTrackProjectType,
} from '@/lib/helper/time-track';
import TimeTrackingProject from './TimeTrackProject';
import TimeTrackProjectAdd from './TimeTrackProjectAdd';

const TimeTrackProjects = async () => {
	const projects = await getTimeTrackProjects();
	return (
		<div className="flex flex-col gap-3">
			<TimeTrackProjectAdd />
			<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
				{projects.length > 0 ? (
					projects?.map((project: TimeTrackProjectType) => (
						<TimeTrackingProject
							key={project.id}
							project={project}
						/>
					))
				) : (
					<Card className="basic-card col-span-full flex h-20 items-center justify-center">
						No Data Found
					</Card>
				)}
			</div>
		</div>
	);
};

export default TimeTrackProjects;
