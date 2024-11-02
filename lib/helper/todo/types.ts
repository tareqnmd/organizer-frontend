import * as z from 'zod';
import { TodoTypeEnum } from './enums';
import { WorkspaceSchema } from './schemas';

export type TodoType = TodoTypeEnum;

export type WorkspaceType = {
	id: string;
	title: string;
	visibility: boolean;
	collaborators: string[];
	createdBy: string;
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

export type ListType = {
	id: string;
	title: string;
	boardId: string;
};
