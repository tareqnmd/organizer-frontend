import * as z from 'zod';
import { TimeTrackProjectSchema, TimeTrackStartSchema } from './schemas';

export type TimeTrackProjectType = {
	id: string;
	name: string;
	baseTime: number;
	status: number;
	createdAt: string;
};
export type TimeTrackProjectSchemaType = z.infer<typeof TimeTrackProjectSchema>;

export type TimeTrackType = {
	id: string;
	projectName: string;
	baseTime: number;
	timeTracked: number;
	isActive: boolean;
	status: number;
	createdAt: string;
	startTime: string;
	endTime: string;
};

export type TimeTrackListParams = {
	isActive?: boolean;
	projectId?: string;
	limit?: number;
};

export type TimeTrackStartSchemaType = z.infer<typeof TimeTrackStartSchema>;
