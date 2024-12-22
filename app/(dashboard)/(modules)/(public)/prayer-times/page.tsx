import PrayerTime from '@/components/modules/prayer-time/PrayerTime';
import { PrayerTimeSearchOptions } from '@/lib/helper/prayer-time';

const PrayerTimesPage = ({
	searchParams,
}: {
	searchParams: PrayerTimeSearchOptions;
}) => {
	return (
		<PrayerTime
			searchOptions={{
				city: searchParams.city ?? 'Dhaka',
				country: searchParams.country ?? 'Bangladesh',
				month: searchParams.month ?? new Date().getMonth().toString(),
				year: searchParams.year ?? new Date().getFullYear().toString(),
			}}
		/>
	);
};

export default PrayerTimesPage;
