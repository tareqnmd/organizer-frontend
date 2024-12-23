import { Routes } from './enums';

export const routes = {
	misc: [
		{
			name: Routes.DASHBOARD_NAME,
			path: Routes.DASHBOARD_PATH,
		},
		{
			name: Routes.ADMIN_NAME,
			path: Routes.ADMIN_PATH,
		},
	],
	user: [
		{
			name: Routes.PROFILE_NAME,
			path: Routes.PROFILE_PATH,
		},
	],
	auth: [
		{
			name: Routes.LOGIN_NAME,
			path: Routes.LOGIN_PATH,
		},
		{
			name: Routes.REGISTER_NAME,
			path: Routes.REGISTER_PATH,
		},
		{
			name: Routes.FORGOT_PASSWORD_NAME,
			path: Routes.FORGOT_PASSWORD_PATH,
		},
		{
			name: Routes.RESET_PASSWORD_NAME,
			path: Routes.RESET_PASSWORD_PATH,
		},
		{
			name: Routes.VERIFY_EMAIL_NAME,
			path: Routes.VERIFY_EMAIL_PATH,
		},
	],
	modules: [
		{
			name: Routes.BUDGET_NAME,
			path: Routes.BUDGET_PATH,
			icon: 'wallet',
			description: 'Personal Financial Management',
		},
		{
			name: Routes.NOTE_NAME,
			path: Routes.NOTE_PATH,
			icon: 'scroll-text',
			description: 'Personal Note Management',
		},
		{
			name: Routes.TODO_NAME,
			path: Routes.TODO_PATH,
			icon: 'list-todo',
			description: 'Personal Task Management',
		},
		{
			name: Routes.TIME_TRACKING_NAME,
			path: Routes.TIME_TRACKING_PATH,
			icon: 'timer',
			description: 'Time Tracking & Project Management',
		},
	],
	public_modules: [
		{
			name: Routes.PRAYER_TIMES_NAME,
			path: Routes.PRAYER_TIMES_PATH,
			icon: 'clock',
			description: 'Prayer Times Information',
		},
		{
			name: Routes.CURRENCY_CONVERTER_NAME,
			path: Routes.CURRENCY_CONVERTER_PATH,
			icon: 'arrow-left-right',
			description: 'Currency Converter Information',
		},
	],
	module_admin: [
		{
			name: Routes.ADMIN_NAME,
			path: Routes.ADMIN_PATH,
		},
		{
			name: Routes.ADMIN_USERS_NAME,
			path: Routes.ADMIN_USERS_PATH,
		},
	],
	module_budget: [
		{
			name: Routes.BUDGET_NAME,
			path: Routes.BUDGET_PATH,
		},
		{
			name: Routes.BUDGET_TRANSACTION_NAME,
			path: Routes.BUDGET_TRANSACTION_PATH,
		},
		{
			name: Routes.BUDGET_TYPE_NAME,
			path: Routes.BUDGET_TYPE_PATH,
		},
		{
			name: Routes.BUDGET_CATEGORY_NAME,
			path: Routes.BUDGET_CATEGORY_PATH,
		},
	],
	module_note: [
		{
			name: Routes.NOTES_NAME,
			path: Routes.NOTES_PATH,
		},
		{
			name: Routes.NOTE_STARRED_NAME,
			path: Routes.NOTE_STARRED_PATH,
		},
	],
	module_todo: [
		{
			name: Routes.TODO_WORKSPACES_NAME,
			path: Routes.TODO_WORKSPACES_PATH,
		},
		{
			name: Routes.TODO_BOARDS_NAME,
			path: Routes.TODO_BOARDS_PATH,
		},
	],
	module_time_tracking: [
		{
			name: Routes.TIME_TRACKING_NAME,
			path: Routes.TIME_TRACKING_PATH,
		},
		{
			name: Routes.TIME_TRACKING_PROJECTS_NAME,
			path: Routes.TIME_TRACKING_PROJECTS_PATH,
		},
		{
			name: Routes.TIME_TRACKING_TRACKS_NAME,
			path: Routes.TIME_TRACKING_TRACKS_PATH,
		},
	],
	public_links: [
		{
			name: Routes.LOGIN_NAME,
			path: Routes.LOGIN_PATH,
		},
		{
			name: Routes.REGISTER_FULL_NAME,
			path: Routes.REGISTER_PATH,
		},
	],
};

export const getRoutes = (type: keyof typeof routes) => {
	return routes[type];
};

export const getRouteName = (type: keyof typeof routes, path: Routes) => {
	try {
		return routes[type].find((route) => route.path === path)?.name ?? '';
	} catch (error) {
		return '';
	}
};

export const publicPaths = [
	Routes.VERIFY_EMAIL_PATH,
	Routes.LOGIN_PATH,
	Routes.REGISTER_PATH,
	Routes.FORGOT_PASSWORD_PATH,
	Routes.RESET_PASSWORD_PATH,
	Routes.PRAYER_TIMES_PATH,
	Routes.CURRENCY_CONVERTER_PATH,
	Routes.PUBLIC_PATH,
];
