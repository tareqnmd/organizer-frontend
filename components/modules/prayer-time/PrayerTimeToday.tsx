import { Card } from '@/components/ui/card';
import { PrayerTimeType } from '@/lib/helper/prayer-time';
import PrayerCard from './PrayerCard';

const PrayerTimeToday = ({
	data,
	city,
	country,
}: {
	data: PrayerTimeType;
	city: string;
	country: string;
}) => {
	if (!data?.date?.gregorianDate) {
		return <Card className="p-4 text-center">No data found</Card>;
	}
	return (
		<Card className="flex flex-col justify-between gap-3 p-2">
			<div className="text-lg font-bold">
				Prayer Times in <span className="capitalize">{city}</span>,{' '}
				<span className="capitalize">{country}</span>
			</div>
			<div className="flex flex-wrap items-center justify-between gap-3">
				<span className="text-md">{data.date.gregorianDate}</span>
				<span className="text-md font-medium">
					{data.date.hijriDate}
				</span>
			</div>
			<div className="flex flex-wrap items-center gap-3">
				{data?.timings?.map((item, index) => (
					<PrayerCard
						key={item.name}
						prayerInfo={item}
						prevPrayerTime={
							data.timings[index - 1]?.time || '00:00'
						}
					/>
				))}
			</div>
		</Card>
	);
};

export default PrayerTimeToday;
