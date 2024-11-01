import { Routes } from './enums';

export const routes = {
	misc: [
		{
			name: 'Home',
			path: Routes.DASHBOARD,
		},
		{
			name: 'Admin',
			path: Routes.ADMIN,
		},
	],
	user: [
		{
			name: 'Profile',
			path: Routes.PROFILE,
		},
	],
	auth: [
		{
			name: 'Login',
			path: Routes.LOGIN,
		},
		{
			name: 'Create One',
			path: Routes.REGISTER,
		},
		{
			name: 'Forgot Password',
			path: Routes.FORGOT_PASSWORD,
		},
		{
			name: 'Reset Password',
			path: Routes.RESET_PASSWORD,
		},
	],
	modules: [
		{
			name: 'Budget',
			path: Routes.BUDGET,
			icon: 'wallet',
			description: 'Personal Financial Management',
		},
		{
			name: 'Note',
			path: Routes.NOTE,
			icon: 'scroll-text',
			description: 'Personal Note Management',
		},
		{
			name: 'Todo',
			path: Routes.TODO,
			icon: 'list-todo',
			description: 'Personal Task Management',
		},
	],
	module_admin: [
		{
			name: 'Admin',
			path: Routes.ADMIN,
		},
		{
			name: 'User Management',
			path: Routes.ADMIN_USERS,
		},
	],
	module_budget: [
		{
			name: 'Budget',
			path: Routes.BUDGET,
		},
		{
			name: 'Transaction',
			path: Routes.BUDGET_TRANSACTION,
		},
		{
			name: 'Type',
			path: Routes.BUDGET_TYPE,
		},
		{
			name: 'Category',
			path: Routes.BUDGET_CATEGORY,
		},
	],
	module_note: [
		{
			name: 'Notes',
			path: Routes.NOTES,
		},
		{
			name: 'Starred',
			path: Routes.NOTE_STARRED,
		},
	],
	module_todo: [
		{
			name: 'Workspaces',
			path: Routes.TODO_WORKSPACES,
		},
		{
			name: 'Boards',
			path: Routes.TODO_BOARDS,
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
