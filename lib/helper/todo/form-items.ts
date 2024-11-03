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
		name: 'boardBg',
		type: FormInputType.TEXT,
		placeholder: 'Enter board background',
	},
	{
		name: 'workspaceId',
		type: FormInputType.SELECT,
		placeholder: 'Select Workspace',
		label: 'Select Workspace',
		optionUrl: '/todo/workspace-select',
	},
	{
		name: 'title',
		label: 'Board Title',
		type: FormInputType.TEXT,
		placeholder: 'Enter board title',
	},
];

export const todoBoardBgOptions = [
	{
		value: 'linear-gradient(90deg, #1CB5E0 0%, #000851 100%)',
	},
	{
		value: 'linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)',
	},
	{
		value: 'linear-gradient(90deg, #4b6cb7 0%, #182848 100%)',
	},
	{
		value: 'linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%)',
	},
	{
		value: 'linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%)',
	},
	{
		value: 'linear-gradient(90deg, #d53369 0%, #daae51 100%)',
	},
];
