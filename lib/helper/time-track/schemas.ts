import * as z from 'zod';

const message = {
	name_required: 'Name is required.',
	name_length: 'Name must be at least 3 characters.',
	base_time_number: 'Base time must be a positive number.',
};

const projectNameSchema = z
	.string()
	.min(1, {
		message: message.name_required,
	})
	.min(3, {
		message: message.name_length,
	});

const baseTimeSchema = z.coerce
	.number({
		invalid_type_error: message.base_time_number,
	})
	.positive()
	.optional();

export const TimeTrackProjectSchema = z.object({
	name: projectNameSchema,
	baseTime: baseTimeSchema,
});
