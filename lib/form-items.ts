export const type_form_items = [
	{
		name: 'name',
		label: 'Name',
		type: 'text',
		placeholder: 'Name',
		description: '',
	},
];

export const type_categories_form_items = [
	{
		name: 'name',
		label: 'Name',
		type: 'text',
		placeholder: 'Name',
		description: '',
	},
	{
		name: 'type',
		label: 'Type',
		type: 'radio',
		options: [
			{ label: 'Income', value: 'Income', id: 'income' },
			{ label: 'Expense', value: 'Expense', id: 'expense' },
		],
		description: '',
	},
];

export const note_form_items = [
	{
		name: 'subject',
		label: 'Subject',
		type: 'text',
		placeholder: 'Subject',
		description: '',
	},
	{
		name: 'details',
		label: 'Details',
		type: 'editor',
		placeholder: 'Details',
		description: '',
	},
];

export const login_form_items = [
	{
		name: 'email',
		label: 'Email',
		type: 'email',
		placeholder: 'Email',
		description: '',
	},
	{
		name: 'password',
		label: 'Password',
		type: 'password',
		placeholder: 'Password',
		description: '',
	},
];
