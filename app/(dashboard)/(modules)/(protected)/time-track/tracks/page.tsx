import TimeTracks from '@/components/modules/time-track/tracks/TimeTracks';
import { TimeTrackListParams } from '@/lib/helper/time-track/types';

const TimeTrackTracksPage = ({
	searchParams,
}: {
	searchParams: TimeTrackListParams;
}) => {
	return <TimeTracks searchParams={searchParams} />;
};

export default TimeTrackTracksPage;
