import { AppState } from '@/app/store';
import { ITransactionsStore } from '@/utils/types/transaction-types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ITransactionsStore = {
	transactions: [],
	filterType: 'all',
	filter: 'all',
};

const transactionsSlice = createSlice({
	name: 'transactions',
	initialState,
	reducers: {
		setTransactions: (state, action) => {
			state.transactions = action.payload;
		},
		addTransaction: (state, action) => {
			state.transactions.push(action.payload);
		},
		updateTransaction: (state, action) => {
			state.transactions = state.transactions.map((item) => {
				if (item._id === action.payload._id) {
					return action.payload;
				}
				return item;
			});
		},
		deleteTransaction: (state, action) => {
			state.transactions = state.transactions.filter(
				(item) => item._id !== action.payload
			);
		},
		setFilterType: (state, action) => {
			state.filterType = action.payload;
		},
		setFilter: (state, action) => {
			state.filter = action.payload;
		},
	},
});

export const {
	setTransactions,
	addTransaction,
	updateTransaction,
	deleteTransaction,
	setFilterType,
	setFilter,
} = transactionsSlice.actions;
export const getTransactionsState = (state: AppState): typeof initialState =>
	state.transactions;
export default transactionsSlice;
