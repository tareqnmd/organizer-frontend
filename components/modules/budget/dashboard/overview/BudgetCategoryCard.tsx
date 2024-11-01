import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import {
	BudgetDashboardOverviewCategoryDetailType,
	TransactionTypeEnum,
} from '@/lib/helper/budget';
import { cn, GetFormatterForCurrency } from '@/lib/utils';
import { useMemo } from 'react';
import BudgetCategoryCardDetails from './BudgetCategoryCardDetails';
import BudgetCategoryCardEmpty from './BudgetCategoryCardEmpty';

const BudgetCategoryCard = ({
	data,
	type,
}: {
	type: TransactionTypeEnum;
	data: BudgetDashboardOverviewCategoryDetailType[];
}) => {
	const formatter = useMemo(() => {
		return GetFormatterForCurrency('BDT');
	}, []);

	return (
		<Card
			className={cn(
				'flex w-full flex-col gap-2 p-2',
				data?.length === 0 ? 'p-4' : '',
			)}
		>
			<CardHeader className="p-0">
				<CardTitle
					className={
						(cn('text-lg'), data?.length === 0 ? 'text-center' : '')
					}
				>
					{type === TransactionTypeEnum.INCOME
						? 'Incomes'
						: 'Expenses'}{' '}
					by category
				</CardTitle>
			</CardHeader>
			<div className="flex items-center justify-between gap-2">
				{data?.length === 0 ? (
					<BudgetCategoryCardEmpty type={type} />
				) : null}

				{data?.length > 0 ? (
					<BudgetCategoryCardDetails type={type} data={data} />
				) : null}
			</div>
		</Card>
	);
};

export default BudgetCategoryCard;
