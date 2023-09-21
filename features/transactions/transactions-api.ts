import apiSlice from '../api/api-slice';
import {
	addTransaction,
	deleteTransaction,
	setTransactions,
	updateTransaction,
} from './transactions-slice';

export const transactionApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getTransaction: builder.query({
			query: (id) => ({
				url: `/transaction/${id}`,
			}),
		}),
		getTransactions: builder.mutation({
			query: (month) => ({
				url: `/transaction/month`,
				method: 'POST',
				body: month >= 1 && month <= 12 ? { month } : {},
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;
					if (data) {
						dispatch(setTransactions(data));
					}
				} catch (error) {}
			},
		}),
		getTransactionsOverview: builder.query({
			query: () => ({
				url: `/transaction/overview`,
			}),
		}),
		addTransaction: builder.mutation({
			query: (payload) => ({
				url: '/transaction',
				method: 'POST',
				body: payload,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;
					if (data) {
						dispatch(addTransaction(data));
					}
				} catch (error) {}
			},
		}),
		editTransaction: builder.mutation({
			query: (payload) => ({
				url: `/transaction/${payload?.id}`,
				method: 'PUT',
				body: payload?.data,
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;
					if (data) {
						dispatch(updateTransaction(data));
					}
				} catch (error) {}
			},
		}),
		deleteTransaction: builder.mutation({
			query: (id) => ({
				url: `/transaction/${id}`,
				method: 'DELETE',
			}),
			async onQueryStarted(arg, { queryFulfilled, dispatch }) {
				try {
					const { data } = await queryFulfilled;
					if (data) {
						dispatch(deleteTransaction(arg));
					}
				} catch (error) {}
			},
		}),
	}),
});

export const {
	useAddTransactionMutation,
	useDeleteTransactionMutation,
	useEditTransactionMutation,
	useGetTransactionsMutation,
	useGetTransactionQuery,
	useGetTransactionsOverviewQuery,
} = transactionApi;
