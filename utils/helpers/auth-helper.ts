export const loginFormInputs = [
	{
		name: 'email',
		label: 'Email',
		type: 'email',
		required: true,
	},
	{
		name: 'password',
		label: 'Password',
		type: 'password',
		required: true,
	},
];

export const registerFormInputs = [
	{
		name: 'name',
		label: 'Name',
		type: 'text',
		required: true,
	},
	{
		name: 'email',
		label: 'Email',
		type: 'email',
		required: true,
	},
	{
		name: 'password',
		label: 'Password',
		type: 'password',
		required: true,
		minlength: 6,
	},
	{
		name: 'confirmPassword',
		label: 'Confirm Password',
		type: 'password',
		required: true,
	},
];

export const userUpdateFormInputs = [
	{
		name: 'name',
		label: 'Name',
		type: 'text',
		required: true,
	},
	{
		name: 'email',
		label: 'Email',
		type: 'email',
		required: true,
	},
	{
		name: 'currentPassword',
		label: 'Current Password',
		type: 'password',
		required: true,
	},
	{
		name: 'password',
		label: 'Password',
		type: 'password',
		required: true,
	},
	{
		name: 'confirmPassword',
		label: 'Confirm Password',
		type: 'password',
		required: true,
	},
];
