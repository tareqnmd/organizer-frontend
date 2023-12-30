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

export const login_form_items = [
	{
		name: 'email',
		label: 'Email',
		type: 'email',
		placeholder: 'Email',
		rules: [{ required: true, message: 'Email Required!' }],
	},
	{
		name: 'password',
		label: 'Password',
		type: 'password',
		placeholder: 'Password',
		rules: [{ required: true, message: 'Password Required!' }],
	},
];
