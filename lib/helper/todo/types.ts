import * as z from 'zod';
import { BoardSchema, CardSchema, WorkspaceSchema } from './schemas';

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
	workspace?: WorkspaceType;
	createdBy: string;
	createdAt: string;
	starred: boolean;
};
export type BoardWorkspaceType = {
	workspaceId: string;
	workspaceTitle: string;
	workspaceCreatedAt: string;
};

export type BoardSchemaType = z.infer<typeof BoardSchema>;

export type ListType = {
	id: string;
	title: string;
	boardId: string;
	listOrder: number;
};

export type ListBoardType = {
	boardTitle: string;
	boardId: string;
	boardCreatedAt: string;
};

export type CardSchemaType = z.infer<typeof CardSchema>;

export type CardType = {
	id: string;
	title: string;
	description: string;
	listId: string;
	cardOrder: number;
};

export type BoardItemsType = Record<string, string[]>;

export type BoardSliceType = {
	lists: ListType[];
	cards: CardType[];
	items: BoardItemsType;
	containers: string[];
	getBoardContainer: (id: string) => ListType | null;
	getBoardCard: (id: string) => CardType | null;
	boardId: string;
};
