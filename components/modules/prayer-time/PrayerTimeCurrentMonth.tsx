import { Card } from '@/components/ui/card';
import { PrayerTimesType } from '@/lib/helper/prayer-time';
import { cn } from '@/lib/utils';

const PrayerTimeCurrentMonth = ({ data }: { data: PrayerTimesType }) => {
	const dateIsSame = (date: string) => {
		try {
			return (
				new Date().toLocaleDateString('en-US', {
					month: 'long',
					day: 'numeric',
				}) ===
				new Date(date).toLocaleDateString('en-US', {
					month: 'long',
					day: 'numeric',
				})
			);
		} catch (error) {
			return false;
		}
	};
	return (
		<Card className="flex flex-col gap-3 p-2">
			<h2 className="text-lg font-bold">Prayer Times for this month</h2>
			<div className="overflow-hidden rounded border">
				<div className="flex flex-col gap-3 overflow-x-auto">
					<div className="grid w-max grid-cols-7 md:w-full">
						<span className="border p-2 text-sm font-medium">
							Date
						</span>
						{data[0].timings.map((prayer) => (
							<span
								className="border p-2 text-sm font-medium"
								key={prayer.name}
							>
								{prayer.name}
							</span>
						))}
						{data.map((item) => (
							<>
								<span
									className={cn(
										'border p-2 text-sm font-medium',
										dateIsSame(item.date.gregorianDate) &&
											'bg-gray-300 dark:bg-gray-700',
									)}
								>
									{item.date.gregorianDate}
								</span>
								{item.timings.map((prayer) => (
									<span
										className={cn(
											'border p-2 text-sm',
											dateIsSame(
												item.date.gregorianDate,
											) && 'bg-gray-300 dark:bg-gray-700',
										)}
										key={prayer.name}
									>
										{prayer.time}
									</span>
								))}
							</>
						))}
					</div>
				</div>
			</div>
		</Card>
	);
};

export default PrayerTimeCurrentMonth;
