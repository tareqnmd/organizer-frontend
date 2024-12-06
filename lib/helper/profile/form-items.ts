import { FormInputType } from '../shared/enum';

export const userUpdateFormInputs = [
	{
		name: 'name',
		label: 'Name',
		type: FormInputType.TEXT,
		placeholder: 'Name',
		description: '',
		fieldRequired: true,
	},
	{
		name: 'email',
		label: 'Email',
		type: FormInputType.EMAIL,
		placeholder: 'Email',
		description: '',
		fieldRequired: true,
		disabled: true,
	},
];

export const userUpdateFormInputsWithPassword = [
	{
		name: 'name',
		label: 'Name',
		type: FormInputType.TEXT,
		placeholder: 'Name',
		description: '',
		fieldRequired: true,
	},
	{
		name: 'email',
		label: 'Email',
		type: FormInputType.EMAIL,
		placeholder: 'Email',
		description: '',
		fieldRequired: true,
		disabled: true,
	},
	{
		name: 'current_password',
		label: 'Current Password',
		type: FormInputType.PASSWORD,
		placeholder: 'Current Password',
		description: '',
		fieldRequired: true,
	},
	{
		name: 'password',
		label: 'Password',
		type: FormInputType.PASSWORD,
		placeholder: 'Password',
		description: '',
		fieldRequired: true,
	},
	{
		name: 'confirm_password',
		label: 'Confirm Password',
		type: FormInputType.PASSWORD,
		placeholder: 'Confirm Password',
		description: '',
		fieldRequired: true,
	},
];
