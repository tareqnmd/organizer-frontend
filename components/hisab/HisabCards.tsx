'use client';
import Card from '@/components/ui/card/Card';
import Taka from '@/components/ui/icons/Taka';
import { useGetTransactionsOverviewQuery } from '@/features/hisab/transactions/api';
import { currentMonthYear } from '@/utils/helpers';
import { MdFormatListNumbered } from 'react-icons/md';
const outside_wrap = 'col-span-12 lg:col-span-6 grid grid-cols-12 gap-4';
const inside_wrap = 'col-span-12 sm:col-span-6';

const HisabCards = () => {
	const { data } = useGetTransactionsOverviewQuery({});
	const { all, current_month } = data || {};

	return (
		<div className="grid grid-cols-12 gap-4">
			<div className={outside_wrap}>
				<h3 className="col-span-12 font-semibold border-b border-slate-700">
					All Time ( From September 23 )
				</h3>
				<Card
					extra_class={inside_wrap}
					title="Current Balance"
					icon={<Taka />}
					value={all?.amount ?? 0}
				/>
				<Card
					extra_class={inside_wrap}
					title="Income"
					icon={<Taka />}
					value={all?.income_amount ?? 0}
				/>
				<Card
					extra_class={inside_wrap}
					title="Expense"
					icon={<Taka />}
					value={all?.expense_amount ?? 0}
				/>
				<Card
					extra_class={inside_wrap}
					title="Transactions"
					icon={<MdFormatListNumbered />}
					value={all?.transactions ?? 0}
				/>
			</div>
			<div className={outside_wrap}>
				<h3 className="col-span-12 font-semibold border-b border-slate-700">
					Current Month ( {currentMonthYear} )
				</h3>
				<Card
					extra_class={inside_wrap}
					title="Current Balance"
					icon={<Taka />}
					value={current_month?.amount ?? 0}
				/>
				<Card
					extra_class={inside_wrap}
					title="Income"
					icon={<Taka />}
					value={current_month?.income_amount ?? 0}
				/>
				<Card
					extra_class={inside_wrap}
					title="Expense"
					icon={<Taka />}
					value={current_month?.expense_amount ?? 0}
				/>
				<Card
					extra_class={inside_wrap}
					title="Transactions"
					icon={<MdFormatListNumbered />}
					value={current_month?.transactions ?? 0}
				/>
			</div>
		</div>
	);
};

export default HisabCards;
