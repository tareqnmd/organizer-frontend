import { FormInputType } from '../shared/enum';

export const todoWorkspaceFormInputs = [
	{
		name: 'title',
		label: 'Workspace Title',
		type: FormInputType.TEXT,
		placeholder: 'Enter workspace title',
	},
];

export const todoBoardFormInputs = [
	{
		name: 'workspaceId',
		type: FormInputType.SELECT,
		placeholder: 'Select workspace',
		label: 'SelectWorkspace',
		optionUrl: '/todo/workspace-select',
	},
	{
		name: 'title',
		label: 'Board Title',
		type: FormInputType.TEXT,
		placeholder: 'Enter board title',
	},
	{
		name: 'boardBg',
		label: 'Board Background',
		type: FormInputType.COLOR,
		placeholder: 'Enter board background',
	},
];
