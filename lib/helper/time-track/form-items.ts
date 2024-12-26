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

export const timeTrackStartFormItems = [
	{
		name: 'projectId',
		type: FormInputType.SELECT,
		placeholder: 'Select Project',
		label: 'Select Project',
		optionUrl: '/time-track/project/select',
		fieldRequired: true,
	},
];

export const timeTrackEditFormItems = [
	{
		name: 'startTime',
		type: FormInputType.DATETIME,
		placeholder: 'Start Time',
		label: 'Start Time',
	},
	{
		name: 'endTime',
		type: FormInputType.DATETIME,
		placeholder: 'End Time',
		label: 'End Time',
	},
];
