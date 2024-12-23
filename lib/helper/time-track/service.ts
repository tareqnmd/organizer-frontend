import { generateDataFromServer, nextProperties } from '@/lib/utils';

export const getTimeTrackProjects = async () => {
	const { data: projects } = await generateDataFromServer(
		'time-track/project/list',
		nextProperties({}),
	);
	return projects ?? [];
};

export const getTimeTrackTracks = async () => {
	const { data: tracks } = await generateDataFromServer(
		'time-track/list',
		nextProperties({}),
	);
	return tracks ?? [];
};
