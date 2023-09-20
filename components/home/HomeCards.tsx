'use client';
import Card from '@/components/ui/card/Card';
import Taka from '@/components/ui/icons/Taka';
import { getTransactionsState } from '@/features/transactions/transactions-slice';
import {
	expenseTransactionAmount,
	getFilteredTransactionType,
	incomeTransactionAmount,
	totalTransactionAmount,
} from '@/utils/helpers/transaction-helper';
import { useMemo } from 'react';
import { MdFormatListNumbered } from 'react-icons/md';
import { useSelector } from 'react-redux';
const outside_wrap = 'col-span-12 lg:col-span-6 grid grid-cols-12 gap-4';
const inside_wrap = 'col-span-12 sm:col-span-6';

const HomeCards = () => {
	const { transactions, filterType, filterTime } =
		useSelector(getTransactionsState);

	const modified_transactions = useMemo(() => {
		return getFilteredTransactionType(transactions, filterTime, filterType);
	}, [transactions, filterTime, filterType]);

	return (
		<div className="grid grid-cols-12 gap-4">
			<div className={outside_wrap}>
				<h3 className="col-span-12 font-semibold border-b border-slate-700">
					Current Month
				</h3>
				<Card
					extra_class={inside_wrap}
					title="Current Balance"
					icon={<Taka />}
					value={totalTransactionAmount(modified_transactions)}
				/>
				<Card
					extra_class={inside_wrap}
					title="Income"
					icon={<Taka />}
					value={incomeTransactionAmount(modified_transactions)}
				/>
				<Card
					extra_class={inside_wrap}
					title="Expense"
					icon={<Taka />}
					value={expenseTransactionAmount(modified_transactions)}
				/>
				<Card
					extra_class={inside_wrap}
					title="Transactions"
					icon={<MdFormatListNumbered />}
					value={String(modified_transactions?.length)}
				/>
			</div>
			<div className={outside_wrap}>
				<h3 className="col-span-12 font-semibold border-b border-slate-700">
					All Time
				</h3>
				<Card
					extra_class={inside_wrap}
					title="Current Balance"
					icon={<Taka />}
					value={totalTransactionAmount(modified_transactions)}
				/>
				<Card
					extra_class={inside_wrap}
					title="Income"
					icon={<Taka />}
					value={incomeTransactionAmount(modified_transactions)}
				/>
				<Card
					extra_class={inside_wrap}
					title="Expense"
					icon={<Taka />}
					value={expenseTransactionAmount(modified_transactions)}
				/>
				<Card
					extra_class={inside_wrap}
					title="Transactions"
					icon={<MdFormatListNumbered />}
					value={String(modified_transactions?.length)}
				/>
			</div>
		</div>
	);
};

export default HomeCards;
