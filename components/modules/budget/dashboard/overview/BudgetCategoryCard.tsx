import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import {
	BudgetDashboardOverviewCategoryDetailType,
	TransactionTypeEnum,
} from '@/lib/helper/budget';
import { cn } from '@/lib/utils';
import BudgetCategoryCardDetails from './BudgetCategoryCardDetails';
import BudgetCategoryCardEmpty from './BudgetCategoryCardEmpty';

const BudgetCategoryCard = ({
	data,
	type,
}: {
	type: TransactionTypeEnum;
	data: BudgetDashboardOverviewCategoryDetailType[];
}) => {
	return (
		<Card className="basic-card">
			<CardHeader className="p-0 pb-2">
				<CardTitle
					className={cn(
						'text-xl',
						data?.length === 0 ? 'text-center' : '',
					)}
				>
					{type === TransactionTypeEnum.INCOME
						? 'Incomes'
						: type === TransactionTypeEnum.SAVING
							? 'Savings'
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
