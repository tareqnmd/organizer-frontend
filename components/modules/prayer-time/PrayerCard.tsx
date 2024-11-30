'use client';

import { PrayerInfo } from '@/lib/helper/prayer-time';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const PrayerCard = ({
	prayerInfo,
	prevPrayerTime,
}: {
	prayerInfo: PrayerInfo;
	prevPrayerTime: string;
}) => {
	const [isActivated, setIsActivated] = useState(false);
	const [upcomingTime, setUpcomingTime] = useState('00:00:00');

	useEffect(() => {
		const currentTimeHours = new Date().getHours();
		const currentTimeMinutes = new Date().getMinutes();
		const totalTime = currentTimeHours * 60 + currentTimeMinutes;
		const prevTime = prevPrayerTime.split(':');
		const prevTimeTotal =
			parseInt(prevTime[0]) * 60 + parseInt(prevTime[1]);
		const prayerTime = prayerInfo.time.split(':');
		const prayerTimeTotal =
			parseInt(prayerTime[0]) * 60 + parseInt(prayerTime[1]);
		const inBetween =
			totalTime > prevTimeTotal && totalTime < prayerTimeTotal;
		setIsActivated(inBetween);
	}, [prayerInfo.time, prevPrayerTime]);

	useEffect(() => {
		const updateUpcomingTime = () => {
			if (!isActivated) return;
			const [hours, minutes] = prayerInfo.time.split(':').map(Number);
			const prayerTime = new Date();
			prayerTime.setHours(hours, minutes, 0, 0);
			const diff = prayerTime.getTime() - new Date().getTime();
			const totalSeconds = diff / 1000;
			if (totalSeconds < 0) {
				clearInterval(intervalId);
				return;
			}
			const formattedTime = `${Math.floor(totalSeconds / 3600)
				.toString()
				.padStart(2, '0')}:${Math.floor((totalSeconds % 3600) / 60)
				.toString()
				.padStart(2, '0')}:${Math.floor(totalSeconds % 60)
				.toString()
				.padStart(2, '0')}`;
			setUpcomingTime(formattedTime);
		};
		const intervalId = setInterval(updateUpcomingTime, 1000);
		return () => clearInterval(intervalId);
	}, [prayerInfo.time, isActivated]);

	return (
		<div
			className={cn(
				'flex min-w-[60px] flex-col items-center justify-center rounded-lg bg-gray-200 p-2',
				isActivated && 'px-4',
			)}
		>
			{isActivated && <span className="text-xs">Upcoming prayer</span>}
			<span className="text-sm">{prayerInfo.name}</span>
			{isActivated && (
				<span className="text-lg font-medium">{upcomingTime}</span>
			)}
			<span className="text-sm font-medium">{prayerInfo.time}</span>
		</div>
	);
};

export default PrayerCard;
