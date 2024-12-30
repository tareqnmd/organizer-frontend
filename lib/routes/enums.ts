export enum Routes {
	// dashboard
	DASHBOARD_PATH = '/',
	DASHBOARD_MODULE_NAME = 'Modules',
	DASHBOARD_NAME = 'Dashboard',

	// auth
	LOGIN_PATH = '/login',
	LOGIN_NAME = 'Login',
	REGISTER_PATH = '/registration',
	REGISTER_NAME = 'Create One',
	REGISTER_FULL_NAME = 'Register',
	FORGOT_PASSWORD_PATH = '/forgot-password',
	FORGOT_PASSWORD_NAME = 'Forgot Password',
	RESET_PASSWORD_PATH = '/reset-password',
	RESET_PASSWORD_NAME = 'Reset Password',
	VERIFY_EMAIL_PATH = '/verify-email',
	VERIFY_EMAIL_NAME = 'Verify Email',

	// admin
	ADMIN_PATH = '/admin',
	ADMIN_NAME = 'Admin',
	ADMIN_USERS_PATH = '/admin/user-management',
	ADMIN_USERS_NAME = 'Users',

	// user
	PROFILE_PATH = '/profile',
	PROFILE_NAME = 'Profile',

	// module
	BUDGET_PATH = '/budget',
	BUDGET_NAME = 'Budget',
	NOTE_PATH = '/note',
	NOTE_NAME = 'Note',
	TODO_PATH = '/todo',
	TODO_NAME = 'Todo',
	TIME_TRACK_PATH = '/time-track',
	TIME_TRACK_NAME = 'Time Track',
	TIME_TRACK_PROJECTS_PATH = '/time-track/projects',
	TIME_TRACK_PROJECTS_NAME = 'Projects',
	TIME_TRACK_TRACKS_PATH = '/time-track/tracks',
	TIME_TRACK_TRACKS_NAME = 'Tracks',
	TIME_TRACK_TRACKS_CALCULATION_PATH = '/time-track/tracks-calculation',
	TIME_TRACK_TRACKS_CALCULATION_NAME = 'Track Calculation',

	// public
	PUBLIC_PATH = '/public',
	PUBLIC_NAME = 'Public',
	PRAYER_TIMES_PATH = '/prayer-times',
	PRAYER_TIMES_NAME = 'Prayer Times',
	CURRENCY_CONVERTER_PATH = '/currency-converter',
	CURRENCY_CONVERTER_NAME = 'Currency Converter',

	// module budget
	BUDGET_TRANSACTION_PATH = '/budget/transaction',
	BUDGET_TRANSACTION_NAME = 'Transaction',
	BUDGET_TYPE_PATH = '/budget/type',
	BUDGET_TYPE_NAME = 'Type',
	BUDGET_CATEGORY_PATH = '/budget/type-category',
	BUDGET_CATEGORY_NAME = 'Type Category',

	// module note
	NOTES_PATH = '/note/all',
	NOTES_NAME = 'All',
	NOTE_STARRED_PATH = '/note/starred',
	NOTE_STARRED_NAME = 'Starred',

	// module todo
	TODO_WORKSPACES_PATH = '/todo/workspaces',
	TODO_WORKSPACES_NAME = 'Workspaces',
	TODO_BOARDS_PATH = '/todo/boards',
	TODO_BOARDS_NAME = 'Boards',
}
