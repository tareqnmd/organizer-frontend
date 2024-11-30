import { PrayerInfo } from '@/lib/helper/prayer-time';

const PrayerCard = ({ prayerInfo }: { prayerInfo: PrayerInfo }) => {
	return (
		<div className="flex min-w-[60px] flex-col items-center justify-center rounded-lg bg-gray-200 p-2">
			<span className="text-sm">{prayerInfo.name}</span>
			<span className="text-sm font-medium">{prayerInfo.time}</span>
		</div>
	);
};

export default PrayerCard;
