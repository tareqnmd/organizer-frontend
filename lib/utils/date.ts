import { format, getDaysInMonth, getYear } from 'date-fns';
import { Period } from '../helper/budget';

export const baseDateFormat = (date: string | Date) =>
	date ? format(date, 'dd-MM-yyyy') : null;

export const baseInputDateFormat = (date: string | Date) =>
	date ? format(date, 'yyyy-MM-dd') : null;

export const baseDateTimeFormat = (date: string | Date) =>
	date ? format(date, 'dd-MM-yyyy hh:mm:ss a XXX') : null;

export const stringToNewDate = (date: string) =>
	new Date(date?.split('-').reverse().join(',')) ?? date ?? null;

export const monthWiseData = (
	monthData: Array<{
		income: number;
		expense: number;
		year: number;
		month: number;
		day: number;
	}>,
	period: Period,
) => {
	const updatedMonthData: Array<{
		income: number;
		expense: number;
		year: number;
		month: number;
		day: number;
	}> = [];
	const daysInMonth = getDaysInMonth(
		new Date(`${period.year},${period.month + 1},01`),
	);
	Array.from(Array(daysInMonth)).map((_, index) => {
		const found = monthData.find(
			(item: { day: number }) => item.day === index,
		);
		found
			? (updatedMonthData[index] = { ...found, day: index + 1 })
			: (updatedMonthData[index] = {
					income: 0,
					expense: 0,
					year: period.year,
					month: period.month,
					day: index + 1,
				});
	});
	return updatedMonthData;
};
export const yearWiseData = (
	yearData: Array<{
		income: number;
		expense: number;
		year: number;
		month: number;
	}>,
	period: Period,
) => {
	const updatedYearData: Array<{
		income: number;
		expense: number;
		year: number;
		month: number;
	}> = [];
	Array.from(Array(12)).map((_, index) => {
		const found = yearData.find(
			(item: { month: number }) => item.month === index,
		);
		found
			? (updatedYearData[index] = found)
			: (updatedYearData[index] = {
					income: 0,
					expense: 0,
					year: period.year,
					month: index,
				});
	});
	return updatedYearData;
};

export const getYearsInRange = (start: string, end: string) => {
	getYear(end);
	const startYear = getYear(start.split('-').reverse().join(','));
	const endYear = getYear(end.split('-').reverse().join(','));
	if (startYear > endYear) {
		throw new Error('Start date cannot be after end date');
	}
	const years = [];
	let currentYear = startYear;
	while (currentYear <= endYear) {
		years.push(currentYear);
		currentYear++;
	}
	return years;
};
