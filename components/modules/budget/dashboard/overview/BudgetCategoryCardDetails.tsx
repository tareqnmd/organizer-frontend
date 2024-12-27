import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
	BudgetDashboardOverviewCategoryDetailType,
	TransactionTypeEnum,
} from '@/lib/helper/budget';
import { GetFormatterForCurrency } from '@/lib/utils';
import { useMemo } from 'react';

const BudgetCategoryCardDetails = ({
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
		<ScrollArea className="mb-2 w-full">
			<div className="flex w-full flex-col gap-2">
				{data?.map((item) => {
					return (
						<div key={item.name}>
							<div className="flex flex-col gap-2">
								<div className="flex items-center justify-between gap-2">
									<span className="flex items-center text-sm">
										{item.name} (
										{item.percentage.toFixed(0)}%)
									</span>
									<span className="text-sm font-medium">
										{formatter.format(item.amount)}
									</span>
								</div>
								<Progress
									value={item.percentage}
									indicator={
										type === TransactionTypeEnum.SAVING
											? 'neutral'
											: type
									}
								/>
							</div>
						</div>
					);
				})}
			</div>
		</ScrollArea>
	);
};

export default BudgetCategoryCardDetails;
