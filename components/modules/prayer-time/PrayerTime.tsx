import { generateDataFromServer, nextProperties } from '@/lib/utils';
import PrayerTimeCurrentMonth from './PrayerTimeCurrentMonth';
import PrayerTimeToday from './PrayerTimeToday';

const PrayerTime = async ({ searchOptions = {} }) => {
	const queryParams = new URLSearchParams(searchOptions);
	const url = `prayer-time/today?${queryParams}`;
	const { data: todayPrayerTime } = await generateDataFromServer(
		url,
		nextProperties({}),
	);
	const { data: currentMonthPrayerTime } = await generateDataFromServer(
		`prayer-time/current-month?${queryParams}`,
		nextProperties({}),
	);

	return (
		<div className="container my-3">
			<PrayerTimeToday data={todayPrayerTime} />
			<PrayerTimeCurrentMonth data={currentMonthPrayerTime} />
		</div>
	);
};

export default PrayerTime;
