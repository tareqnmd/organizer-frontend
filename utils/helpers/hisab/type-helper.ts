export const typeTableColumns = [
	{ title: 'Type', dataIndex: 'type', type: 'text' },
	{ title: 'Name', dataIndex: 'name', type: 'text' },
	{ title: 'Status', dataIndex: 'status_name', type: 'text' },
];

export const typeFormInputs = [
	{
		name: 'name',
		label: 'Name',
		type: 'text',
		required: true,
	},
	{
		name: 'type',
		label: 'Type',
		type: 'radio',
		options: [
			{
				name: 'Income',
				value: 'Income',
			},
			{
				name: 'Expense',
				value: 'Expense',
			},
		],
		required: true,
	},
];
