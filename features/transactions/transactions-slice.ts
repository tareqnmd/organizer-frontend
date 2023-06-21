import { AppState } from '@/app/store';
import { ITransactionsStore } from '@/utils/types/transaction-types';
import { createSlice } from '@reduxjs/toolkit';

const initialState: ITransactionsStore = {
	transactions: [],
	filterTime: 'all',
	filterType: 'all',
};

const transactionsSlice = createSlice({
	name: 'transactions',
	initialState,
	reducers: {
		setTransactions: (state, action) => {
			state.transactions = action.payload;
		},
		setFilterType: (state, action) => {
			state.filterType = action.payload;
		},
		setFilterTime: (state, action) => {
			state.filterTime = action.payload;
		},
	},
});

export const { setTransactions, setFilterTime, setFilterType } =
	transactionsSlice.actions;
export const getTransactionsState = (state: AppState): typeof initialState =>
	state.transactions;
export default transactionsSlice;
