import * as z from 'zod';
import { NoteSchema } from './schemas';
export type NoteType = {
	id: string;
	subject: string;
	details: string;
	createdAt: string;
	starred: boolean;
	status: number;
};

export type NotesType = NoteType[];

export type NotesParamType = { starred?: string };

export type NoteSchemaType = z.infer<typeof NoteSchema>;
