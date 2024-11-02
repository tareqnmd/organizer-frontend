import { TodoTypeEnum } from './enums';

export type TodoType = TodoTypeEnum;

export type WorkspaceType = {
	id: string;
	title: string;
	visibility: boolean;
	collaborators: string[];
	createdBy: string;
};

export type BoardType = {
	id: string;
	title: string;
	boardBg: string;
	visibility: boolean;
	workspaceId: string;
	createdBy: string;
	starred: boolean;
};
