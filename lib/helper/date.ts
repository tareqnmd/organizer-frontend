import { format } from 'date-fns';

export const baseDateFormat = (date: string | Date) =>
	format(date, 'dd-MM-yyyy');

export const stringToNewDate = (date: string) =>
	new Date(date.split('-').reverse().join(','));
