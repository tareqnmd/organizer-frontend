import { TransactionTypeEnum } from '@/lib/helper/budget';

const BudgetCategoryCard = ({ type }: { type: TransactionTypeEnum }) => {
	return (
		<div className="mt-2 flex w-full flex-col items-center justify-center">
			No data for the selected period
			<p className="text-muted-foreground text-center text-sm">
				Try selecting a different period or try adding new{' '}
				{type === TransactionTypeEnum.INCOME ? 'incomes' : 'expenses'}
			</p>
		</div>
	);
};

export default BudgetCategoryCard;
