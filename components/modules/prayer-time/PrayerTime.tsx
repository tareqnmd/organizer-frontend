import { generateDataFromServer, nextProperties } from '@/lib/utils';
import PrayerLocationSelect from './PrayerLocationSelect';
import PrayerTimeCurrentMonth from './PrayerTimeCurrentMonth';
import PrayerTimeToday from './PrayerTimeToday';

const PrayerTime = async ({
	searchOptions,
}: {
	searchOptions: { city: string; country: string };
}) => {
	const queryParams = new URLSearchParams(searchOptions);
	const url = `prayer-time/today?${queryParams}`;
	const { data: todayPrayerTime = {} } = await generateDataFromServer(
		url,
		nextProperties({}),
	);
	const { data: currentMonthPrayerTime = [] } = await generateDataFromServer(
		`prayer-time/current-month?${queryParams}`,
		nextProperties({}),
	);

	return (
		<div className="container my-3 flex flex-col gap-3">
			<PrayerLocationSelect
				city={searchOptions.city ?? 'Dhaka'}
				country={searchOptions.country ?? 'Bangladesh'}
			/>
			<PrayerTimeToday
				city={searchOptions.city ?? 'Dhaka'}
				country={searchOptions.country ?? 'Bangladesh'}
				data={todayPrayerTime}
			/>
			{currentMonthPrayerTime?.length > 0 && (
				<PrayerTimeCurrentMonth data={currentMonthPrayerTime} />
			)}
		</div>
	);
};

export default PrayerTime;
