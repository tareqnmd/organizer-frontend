import { Button } from '@/components/ui/button';
import { TimeTrackProjectType } from '@/lib/helper/time-track';

const TimeTrackProjectCreate = ({
	project,
}: {
	project?: TimeTrackProjectType;
}) => {
	return (
		<div className="self-end">
			<Button>Create</Button>
		</div>
	);
};

export default TimeTrackProjectCreate;
