import * as z from 'zod';
import {
	TimeTrackEditSchema,
	TimeTrackProjectSchema,
	TimeTrackStartSchema,
} from './schemas';

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
	from?: string | null;
	to?: string | null;
	page?: string;
	perPage?: string;
};

export type TimeTrackStartSchemaType = z.infer<typeof TimeTrackStartSchema>;
export type TimeTrackEditSchemaType = z.infer<typeof TimeTrackEditSchema>;

export type TimeTrackCalculationParams = {
	projectId: string;
	from: string;
	to: string;
};
