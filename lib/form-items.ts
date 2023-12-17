export const note_form_items = [
	{
		name: 'subject',
		label: 'Subject',
		type: 'text',
		placeholder: 'Subject',
		rules: [{ required: true, message: 'Subject Required!' }],
	},
	{
		name: 'details',
		label: 'Details',
		type: 'editor',
		placeholder: 'Details',
		rules: [{ required: true, message: 'Details Required!' }],
	},
];
