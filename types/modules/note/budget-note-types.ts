export type NoteType = {
	id: string;
	subject: string;
	details: string;
	createdAt: string;
	status: number;
};

export type NotesType = NoteType[];

export type NotesParamType = { starred?: string };
