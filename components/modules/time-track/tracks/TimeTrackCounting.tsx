'use client';
import { formatTimeFromMinutes } from '@/lib/helper/time-track';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const TimeTrackCounting = ({
	timeTracked,
	isActive,
	startTime,
	extraBlinkClassName = '',
}: {
	timeTracked: number;
	isActive: boolean;
	startTime: string;
	extraBlinkClassName?: string;
}) => {
	const [countingTime, setCountingTime] = useState(timeTracked);

	useEffect(() => {
		if (isActive && startTime) {
			const updateCountingTime = () => {
				const currentTime = new Date();
				const timeDifference =
					(currentTime.getTime() - new Date(startTime).getTime()) /
					60000;
				setCountingTime(Math.floor(timeDifference));
			};
			updateCountingTime();
			const interval = setInterval(updateCountingTime, 60000);
			return () => clearInterval(interval);
		}
	}, [isActive, startTime]);

	return (
		<div className="flex items-center gap-1 text-sm">
			{formatTimeFromMinutes(countingTime, true)}
			{isActive && (
				<span
					className={cn(
						'h-2 w-2 shrink-0 animate-pulse rounded-full bg-status-success duration-500',
						extraBlinkClassName,
					)}
				></span>
			)}
		</div>
	);
};

export default TimeTrackCounting;
