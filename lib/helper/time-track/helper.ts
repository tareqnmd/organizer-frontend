export const formatTimeFromMinutes = (
	time: number = 0,
	isActive: boolean = false,
) => {
	const hours = Math.floor(time / 60);
	const minutes = Math.floor(time % 60) + (isActive ? 1 : 0);
	return hours < 1 ? `${minutes}m` : `${hours}h ${minutes}m`;
};
