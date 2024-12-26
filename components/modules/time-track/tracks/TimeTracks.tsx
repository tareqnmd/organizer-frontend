import { getTimeTrackTracks } from '@/lib/helper/time-track/service';
import { TimeTrackListParams } from '@/lib/helper/time-track/types';
import { baseDateFormat } from '@/lib/utils/date';
import { endOfMonth, startOfMonth } from 'date-fns';
import TimeTrackFilterWrapper from './TimeTrackFilterWrapper';
import TimeTrackTracksTable from './TimeTrackTracksTable';

const TimeTracks = async ({
	searchParams,
}: {
	searchParams: TimeTrackListParams;
}) => {
	const tracks = await getTimeTrackTracks(searchParams);
	return (
		<TimeTrackFilterWrapper
			initialValues={{
				...searchParams,
				page: searchParams?.page ?? '1',
				perPage: searchParams?.perPage ?? '10',
				from:
					searchParams?.from ??
					baseDateFormat(startOfMonth(new Date())),
				to: searchParams?.to ?? baseDateFormat(endOfMonth(new Date())),
			}}
			totalTracks={tracks.length}
		>
			<TimeTrackTracksTable tracks={tracks} />
		</TimeTrackFilterWrapper>
	);
};

export default TimeTracks;
