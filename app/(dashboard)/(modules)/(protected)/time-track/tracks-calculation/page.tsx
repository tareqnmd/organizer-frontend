import TimeTracksCalculation from '@/components/modules/time-track/tracks-calculation/TimeTracksCalculation';
import { TimeTrackCalculationParams } from '@/lib/helper/time-track/types';

const TimeTracksCalculationPage = ({
	searchParams,
}: {
	searchParams: TimeTrackCalculationParams;
}) => {
	return <TimeTracksCalculation searchParams={searchParams} />;
};

export default TimeTracksCalculationPage;
