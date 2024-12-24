import { FormInputType } from '../shared/enum';

export const timeTrackProjectFormItems = [
	{
		name: 'name',
		label: 'Project Name',
		type: FormInputType.TEXT,
		placeholder: 'Enter project name',
		fieldRequired: true,
	},
	{
		name: 'baseTime',
		label: 'Base Time (in minutes)',
		type: FormInputType.NUMBER,
		placeholder: 'Enter base time in minutes',
	},
];
