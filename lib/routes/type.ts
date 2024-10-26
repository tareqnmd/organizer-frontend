import { Routes } from './enum';

export type RouteType = {
	name: string;
	path: Routes;
	icon?: string;
	description?: string;
};

export type RoutesType = {
	[key: string]: RouteType[];
};
