import { generateDataFromServer, nextProperties } from '@/lib/utils';
import PrayerLocationSelect from './PrayerLocationSelect';
import PrayerTimeMonthYearSelector from './PrayerTimeMonthYearSelector';
import PrayerTimeToday from './PrayerTimeToday';

import { PrayerTimeSearchOptions } from '@/lib/helper/prayer-time';
import PrayerTimeMonthWise from './PrayerTimeMonthWise';
const PrayerTime = async ({
	searchOptions,
}: {
	searchOptions: PrayerTimeSearchOptions;
}) => {
	const queryParams = new URLSearchParams(searchOptions);
	const url = `prayer-time/today?${queryParams}`;
	const { data: todayPrayerTime = {} } = await generateDataFromServer(
		url,
		nextProperties({}),
	);
	const { data: currentMonthPrayerTime = [] } = await generateDataFromServer(
		`prayer-time/month/${searchOptions.year}/${searchOptions.month}?${queryParams}`,
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
				<>
					<PrayerTimeMonthYearSelector
						searchOptions={searchOptions}
					/>
					<PrayerTimeMonthWise data={currentMonthPrayerTime} />
				</>
			)}
		</div>
	);
};

export default PrayerTime;
