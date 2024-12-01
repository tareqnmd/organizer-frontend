import { PrayerTimeEnum } from './enum';

export type PrayerInfo = {
	time: string;
	name: PrayerTimeEnum;
};

export type PrayerTimeType = {
	timings: PrayerInfo[];
	date: {
		gregorianDate: string;
		hijriDate: string;
	};
};

export type PrayerTimeSearchOptions = {
	city: string;
	country: string;
	month: string;
	year: string;
};

export type PrayerTimesType = PrayerTimeType[];
