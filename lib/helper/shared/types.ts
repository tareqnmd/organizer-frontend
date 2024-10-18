import { Routes } from './enum';

export type RouteType = {
	name: string;
	path: Routes;
};

export type RoutesType = {
	[key: string]: RouteType[];
};
