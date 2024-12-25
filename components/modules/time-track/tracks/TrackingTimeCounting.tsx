'use client';
import { formatTimeFromMinutes } from '@/lib/helper/time-track';
import { useEffect, useState } from 'react';

const TrackingTimeCounting = ({
	timeTracked,
	isActive,
	startTime,
}: {
	timeTracked: number;
	isActive: boolean;
	startTime: string;
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

	return <div className="text-sm">{formatTimeFromMinutes(countingTime)}</div>;
};

export default TrackingTimeCounting;
