import * as z from 'zod';
import { TimeTrackProjectSchema } from './schemas';

export type TimeTrackProjectType = {
	id: string;
	name: string;
	baseTime: number;
	status: number;
	createdAt: string;
};
export type TimeTrackProjectSchemaType = z.infer<typeof TimeTrackProjectSchema>;

export type TimeTrackTrackType = {
	id: string;
	projectName: string;
	baseTime: number;
	timeTracked: number;
	isActive: boolean;
	status: number;
	createdAt: string;
};
