export const formatTimeFromMinutes = (time: number = 0) => {
	const hours = Math.floor(time / 60);
	const minutes = Math.floor(time % 60);
	return hours < 1 ? `${minutes}m` : `${hours}h ${minutes}m`;
};
