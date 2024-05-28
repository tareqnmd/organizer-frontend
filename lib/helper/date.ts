import { format } from 'date-fns';

export const baseDateFormat = (dateString: string) =>
	format(dateString, 'dd-MM-yyyy');
