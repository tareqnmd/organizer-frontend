'use client';

import { PrayerInfo, PrayerTimeEnum } from '@/lib/helper/prayer-time';
import { cn } from '@/lib/utils';
import { useEffect, useMemo, useState } from 'react';

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

	const isNextDayFajr = useMemo(
		() => prayerInfo.name === PrayerTimeEnum.NEXT_DAY_FAJR,
		[prayerInfo.name],
	);

	useEffect(() => {
		const currentTime = isNextDayFajr
			? new Date(new Date().setDate(new Date().getDate() + 1))
			: new Date();
		const totalTime = calculateTotalMinutes(
			`${currentTime.getHours()}:${currentTime.getMinutes()}`,
		);
		const prevTimeTotal = calculateTotalMinutes(prevPrayerTime);
		const prayerTimeTotal =
			calculateTotalMinutes(prayerInfo.time) +
			(isNextDayFajr ? 24 * 60 : 0);
		const inBetween =
			totalTime > prevTimeTotal && totalTime < prayerTimeTotal;
		setIsActivated(inBetween);
	}, [isNextDayFajr, prayerInfo.time, prevPrayerTime]);

	useEffect(() => {
		const updateUpcomingTime = () => {
			if (!isActivated) return;
			const prayerTime = new Date();
			const [hours, minutes] = prayerInfo.time.split(':').map(Number);
			prayerTime.setHours(hours, minutes, 0, 0);
			if (isNextDayFajr) {
				prayerTime.setDate(prayerTime.getDate() + 1);
			}
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
	}, [prayerInfo.time, isActivated, prayerInfo.name, isNextDayFajr]);

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
