import { format } from 'date-fns';

export const baseDateFormat = (date: string | Date) =>
	format(date, 'dd-MM-yyyy');
