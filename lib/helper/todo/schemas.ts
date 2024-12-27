import * as z from 'zod';

const message = {
	title_required: 'Title is required.',
	title_length: 'Title must be at least 3 characters.',
	workspace_required: 'Workspace is required.',
	board_bg_length: 'Board background must be at least 3 characters.',
};

const titleSchema = z
	.string()
	.min(1, {
		message: message.title_required,
	})
	.min(3, {
		message: message.title_length,
	});

export const WorkspaceSchema = z.object({
	title: titleSchema,
});

const boardBgSchema = z.string().min(3, {
	message: message.board_bg_length,
});
const workspaceIdSchema = z.string().min(1, {
	message: message.workspace_required,
});

export const BoardSchema = z.object({
	title: titleSchema,
	boardBg: boardBgSchema,
	workspaceId: workspaceIdSchema,
});

export const CardSchema = z.object({
	description: z.string(),
});
