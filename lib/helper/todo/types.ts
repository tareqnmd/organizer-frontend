import * as z from 'zod';
import { TodoTypeEnum } from './enums';
import { BoardSchema, WorkspaceSchema } from './schemas';

export type TodoType = TodoTypeEnum;

export type WorkspaceType = {
	id: string;
	title: string;
	visibility: boolean;
	collaborators: string[];
	createdBy: string;
	createdAt: string;
};
export type WorkspaceSchemaType = z.infer<typeof WorkspaceSchema>;

export type BoardType = {
	id: string;
	title: string;
	boardBg: string;
	visibility: boolean;
	workspaceId: string;
	createdBy: string;
	starred: boolean;
};

export type BoardSchemaType = z.infer<typeof BoardSchema>;

export type ListType = {
	id: string;
	title: string;
	boardId: string;
};
