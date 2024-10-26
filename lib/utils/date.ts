import { format, getDaysInMonth, getYear } from 'date-fns';

export const baseDateFormat = (date: string | Date) =>
	format(date, 'dd-MM-yyyy');

export const stringToNewDate = (date: string) =>
	new Date(date?.split('-').reverse().join(',')) ?? date ?? null;

export const monthWiseData = (monthData: any, period: any) => {
	const updatedMonthData: any = [];
	const daysInMonth = getDaysInMonth(
		new Date(`${period.year},${period.month + 1},01`),
	);
	Array.from(Array(daysInMonth)).map((_, index) => {
		const found = monthData.find((item: any) => item.day === index);
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

export const yearWiseData = (yearData: any, period: any) => {
	const updatedYearData: any = [];
	Array.from(Array(12)).map((_, index) => {
		const found = yearData.find((item: any) => item.month === index);
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
