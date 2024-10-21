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
