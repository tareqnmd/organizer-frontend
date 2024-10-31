export enum Routes {
	// dashboard
	DASHBOARD = '/',

	// auth
	LOGIN = '/login',
	REGISTER = '/registration',
	FORGOT_PASSWORD = '/forgot-password',
	RESET_PASSWORD = '/reset-password',

	// admin
	ADMIN = '/admin',
	ADMIN_USERS = '/admin/user-management',

	// user
	PROFILE = '/profile',

	// module
	BUDGET = '/budget',
	NOTE = '/note',
	TODO = '/todo',

	// module budget
	BUDGET_TRANSACTION = '/budget/transaction',
	BUDGET_TYPE = '/budget/type',
	BUDGET_CATEGORY = '/budget/type-category',

	// module note
	NOTES = '/note/all',
	NOTE_STARRED = '/note/starred',

	// module todo
	TODO_WORKSPACES = '/todo/workspaces',
	TODO_BOARDS = '/todo/boards',
}
