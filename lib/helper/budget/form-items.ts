export const transactionFormItems = [
	{
		name: 'categoryId',
		label: 'Category',
		type: 'select',
		placeholder: 'Select a Category',
		optionUrl: '/budget/type-category-select',
		description: '',
		required: true,
	},
	{
		name: 'amount',
		label: 'Amount',
		type: 'number',
		placeholder: 'Amount',
		description: '',
		required: true,
	},
	{
		name: 'date',
		label: 'Date',
		type: 'date',
		placeholder: 'Date',
		description: '',
		required: true,
	},
	{
		name: 'description',
		label: 'Description',
		type: 'textarea',
		placeholder: 'Description',
		description: '',
		required: true,
	},
];

export const typeFormItems = [
	{
		name: 'name',
		label: 'Name',
		type: 'text',
		placeholder: 'Name',
		description: '',
	},
];

export const categoryFormItems = [
	{
		name: 'name',
		label: 'Name',
		type: 'text',
		placeholder: 'Name',
		description: '',
		required: true,
	},
	{
		name: 'typeId',
		label: 'Type',
		type: 'select',
		placeholder: 'Select a Type',
		optionUrl: '/budget/type-select',
		// staticOptions: [
		// 	{ label: 'Income', value: 'Income' },
		// 	{ label: 'Expense', value: 'Expense' },
		// ],
		description: '',
		required: true,
	},
];
