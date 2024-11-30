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

	const calculateTotalMinutes = (time: string) => {
		const [hours, minutes] = time.split(':').map(Number);
		return hours * 60 + minutes;
	};

	const formatTime = (totalSeconds: number) => {
		return `${Math.floor(totalSeconds / 3600)
			.toString()
			.padStart(2, '0')}:${Math.floor((totalSeconds % 3600) / 60)
			.toString()
			.padStart(2, '0')}:${Math.floor(totalSeconds % 60)
			.toString()
			.padStart(2, '0')}`;
	};

	useEffect(() => {
		const totalTime = calculateTotalMinutes(
			`${new Date().getHours()}:${new Date().getMinutes()}`,
		);
		const prevTimeTotal = calculateTotalMinutes(prevPrayerTime);
		const prayerTimeTotal = calculateTotalMinutes(prayerInfo.time);
		const inBetween =
			totalTime > prevTimeTotal && totalTime < prayerTimeTotal;
		setIsActivated(inBetween);
	}, [prayerInfo.time, prevPrayerTime]);

	useEffect(() => {
		const updateUpcomingTime = () => {
			if (!isActivated) return;
			const prayerTime = new Date();
			const [hours, minutes] = prayerInfo.time.split(':').map(Number);
			prayerTime.setHours(hours, minutes, 0, 0);
			const diff = prayerTime.getTime() - new Date().getTime();
			const totalSeconds = diff / 1000;
			if (totalSeconds < 0) {
				clearInterval(intervalId);
				return;
			}
			setUpcomingTime(formatTime(totalSeconds));
		};
		const intervalId = setInterval(updateUpcomingTime, 1000);
		return () => clearInterval(intervalId);
	}, [prayerInfo.time, isActivated]);

	return (
		<div
			className={cn(
				'flex min-w-[60px] flex-col items-center justify-center rounded-lg bg-gray-300 p-2 dark:bg-gray-700',
				isActivated && 'px-4',
			)}
		>
			{isActivated && <span className="text-xs">Upcoming prayer</span>}
			<span className="text-xs">{prayerInfo.name}</span>
			{isActivated && (
				<span className="text-lg font-medium">{upcomingTime}</span>
			)}
			<span className="text-sm font-medium">{prayerInfo.time}</span>
		</div>
	);
};

export default PrayerCard;
3;
