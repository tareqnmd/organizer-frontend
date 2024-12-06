import { FormInputType } from '../shared/enum';

export const transactionFormItems = [
	{
		name: 'categoryId',
		label: 'Category',
		type: FormInputType.SELECT,
		placeholder: 'Select a Category',
		optionUrl: '/budget/type-category-select',
		description: '',
		fieldRequired: true,
	},
	{
		name: 'savingCategoryId',
		label: 'Saving Category',
		type: FormInputType.SELECT,
		placeholder: 'Select a Category',
		optionUrl: '/budget/type-category-saving-select',
		description: '',
		fieldRequired: false,
	},
	{
		name: 'amount',
		label: 'Amount',
		type: FormInputType.NUMBER,
		placeholder: 'Amount',
		description: '',
		fieldRequired: true,
	},
	{
		name: 'date',
		label: 'Date',
		type: FormInputType.DATE,
		placeholder: 'Date',
		description: '',
		fieldRequired: true,
	},
	{
		name: 'description',
		label: 'Description',
		type: FormInputType.TEXTAREA,
		placeholder: 'Description',
		description: '',
		fieldRequired: true,
	},
];

export const typeFormItems = [
	{
		name: 'name',
		label: 'Name',
		type: FormInputType.TEXT,
		placeholder: 'Name',
		description: '',
		fieldRequired: true,
	},
];

export const categoryFormItems = [
	{
		name: 'name',
		label: 'Name',
		type: FormInputType.TEXT,
		placeholder: 'Name',
		description: '',
		fieldRequired: true,
	},
	{
		name: 'typeId',
		label: 'Type',
		type: FormInputType.SELECT,
		placeholder: 'Select a Type',
		optionUrl: '/budget/type-select',
		description: '',
		fieldRequired: true,
	},
	{
		name: 'expenseSaving',
		label: 'Expense related to Saving',
		type: FormInputType.CHECKBOX,
		fieldRequired: false,
		staticOptions: [
			{
				label: 'Yes',
				value: true,
			},
		],
	},
];
