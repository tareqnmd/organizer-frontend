import { PrayerTimesType } from '@/lib/helper/prayer-time';

const PrayerTimeCurrentMonth = ({ data }: { data: PrayerTimesType }) => {
	return (
		<div className="mt-3 flex flex-col gap-3">
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
								<span className="border p-2 text-sm font-medium">
									{item.date.gregorianDate}
								</span>
								{item.timings.map((prayer) => (
									<span
										className="border p-2 text-sm"
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
		</div>
	);
};

export default PrayerTimeCurrentMonth;
