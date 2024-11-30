import { PrayerTimeType } from '@/lib/helper/prayer-time';
import PrayerCard from './PrayerCard';

const PrayerTimeToday = ({ data }: { data: PrayerTimeType }) => {
	return (
		<div className="flex flex-col justify-between gap-3 rounded-lg border p-2 shadow">
			<div className="text-lg font-bold">Prayer Times in Dhaka</div>
			<div className="flex items-center justify-between">
				<span className="text-md">{data.date.gregorianDate}</span>
				<span className="text-md font-medium">
					{data.date.hijriDate}
				</span>
			</div>
			<div className="flex flex-wrap items-center gap-3">
				{data?.timings?.map((item) => (
					<PrayerCard key={item.name} prayerInfo={item} />
				))}
			</div>
		</div>
	);
};

export default PrayerTimeToday;
