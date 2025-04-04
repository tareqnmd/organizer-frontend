import { FormInputType } from '../shared/enum';
import { ExtraOptionEnum } from './enums';

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
];

export const categoryTypeExtraOptions = {
	Expense: [
		{
			name: 'expenseExtraOptions',
			type: FormInputType.RADIO,
			fieldRequired: false,
			staticOptions: [
				{
					label: 'Add to Saving',
					value: ExtraOptionEnum.INCREASE_SAVING,
				},
				{
					label: 'Deduct from Loan',
					value: ExtraOptionEnum.DECREASE_LOAN,
				},
			],
		},
	],
	Income: [
		{
			name: 'incomeExtraOptions',
			type: FormInputType.RADIO,
			fieldRequired: false,
			staticOptions: [
				{
					label: 'Add to Loan',
					value: ExtraOptionEnum.INCREASE_LOAN,
				},
				{
					label: 'Deduct from Saving',
					value: ExtraOptionEnum.DECREASE_SAVING,
				},
			],
		},
	],
};
