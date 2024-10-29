import { FormInputType } from "../shared/enum";

export const transactionFormItems = [
	{
		name: 'categoryId',
		label: 'Category',
		type: FormInputType.SELECT,
		placeholder: 'Select a Category',
		optionUrl: '/budget/type-category-select',
		description: '',
		required: true,
	},
	{
		name: 'amount',
		label: 'Amount',
		type: FormInputType.NUMBER,
		placeholder: 'Amount',
		description: '',
		required: true,
	},
	{
		name: 'date',
		label: 'Date',
		type: FormInputType.DATE,
		placeholder: 'Date',
		description: '',
		required: true,
	},
	{
		name: 'description',
		label: 'Description',
		type: FormInputType.TEXTAREA,
		placeholder: 'Description',
		description: '',
		required: true,
	},
];

export const typeFormItems = [
	{
		name: 'name',
		label: 'Name',
		type: FormInputType.TEXT,
		placeholder: 'Name',
		description: '',
	},
];

export const categoryFormItems = [
	{
		name: 'name',
		label: 'Name',
		type: FormInputType.TEXT,
		placeholder: 'Name',
		description: '',
	},
	{
		name: 'typeId',
		label: 'Type',
		type: FormInputType.SELECT,
		placeholder: 'Select a Type',
		optionUrl: '/budget/type-select',
		description: '',
	},
];
