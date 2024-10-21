import { Routes } from './enum';

export type RouteType = {
	name: string;
	path: Routes;
};

export type RoutesType = {
	[key: string]: RouteType[];
};

export type TimeFrame = 'month' | 'year';
export type Period = { year: number; month: number };
