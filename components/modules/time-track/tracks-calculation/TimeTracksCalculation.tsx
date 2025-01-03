import { getTimeTrackTracks } from '@/lib/helper/time-track/service';
import { TimeTrackCalculationParams } from '@/lib/helper/time-track/types';
import { baseDateFormat } from '@/lib/utils/date';
import { endOfMonth, startOfMonth } from 'date-fns';
import TimeTracksCalculationData from './TimeTracksCalculationData';
import TimeTracksCalculationSearch from './TimeTracksCalculationSearch';

const TimeTracksCalculation = async ({
	searchParams,
}: {
	searchParams: TimeTrackCalculationParams;
}) => {
	const tracks =
		searchParams?.projectId && searchParams?.from && searchParams?.to
			? await getTimeTrackTracks(searchParams)
			: [];
	return (
		<div className="flex flex-col gap-4">
			<TimeTracksCalculationSearch
				searchParams={{
					projectId: searchParams?.projectId ?? '',
					from:
						searchParams?.from ??
						baseDateFormat(startOfMonth(new Date())),
					to:
						searchParams?.to ??
						baseDateFormat(endOfMonth(new Date())),
				}}
			/>
			{tracks.length > 0 ? (
				<TimeTracksCalculationData tracks={tracks} />
			) : searchParams?.projectId &&
			  searchParams?.from &&
			  searchParams?.to ? (
				<div className="flex h-full items-center justify-center">
					<div className="text-gray-500">No data found</div>
				</div>
			) : null}
		</div>
	);
};

export default TimeTracksCalculation;
