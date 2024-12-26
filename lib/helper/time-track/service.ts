import {
	generateDataFromServer,
	nextProperties,
	toQueryString,
} from '@/lib/utils';
import { TimeTrackListParams } from './types';

export const getTimeTrackProjects = async () => {
	const { data: projects } = await generateDataFromServer(
		'time-track/project/list',
		nextProperties({}),
	);
	return projects ?? [];
};

export const getTimeTrackTracks = async (params: TimeTrackListParams = {}) => {
	const modifiedParams = toQueryString(params ?? {});
	const { data: tracks } = await generateDataFromServer(
		`time-track/list${modifiedParams}`,
		nextProperties({}),
	);
	return tracks ?? [];
};
