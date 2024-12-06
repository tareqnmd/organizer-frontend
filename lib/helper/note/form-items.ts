import { FormInputType } from '../shared/enum';

export const noteFormItems = [
	{
		name: 'subject',
		label: 'Subject',
		type: FormInputType.TEXT,
		placeholder: 'Subject',
		description: '',
		fieldRequired: true,
	},
	{
		name: 'details',
		label: 'Details',
		type: FormInputType.EDITOR,
		placeholder: 'Details',
		description: '',
	},
];
