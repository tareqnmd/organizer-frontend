export const formatTimeFromMinutes = (time: number) => {
	const hours = Math.floor(time / 60);
	const minutes = time % 60;
	return minutes === 0 ? `${hours}h` : `${hours}h ${minutes}m`;
};
