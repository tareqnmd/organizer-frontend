import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ScrollArea } from '@/components/ui/scroll-area';
import { TransactionType } from '@/lib/helper/modules/budget';
import { cn, GetFormatterForCurrency } from '@/lib/utils';
import { useMemo } from 'react';

const BudgetCategoryCard = ({
	data,
	type,
}: {
	type: TransactionType;
	data: any;
}) => {
	const formatter = useMemo(() => {
		return GetFormatterForCurrency('BDT');
	}, []);

	return (
		<Card className="flex w-full flex-col gap-2 p-2">
			<CardHeader className="p-0">
				<CardTitle
					className={
						(cn('text-lg'), data?.length === 0 ? 'text-center' : '')
					}
				>
					{type === 'income' ? 'Incomes' : 'Expenses'} by category
				</CardTitle>
			</CardHeader>

			<div className="flex items-center justify-between gap-2">
				{data?.length === 0 && (
					<div className="flex h-20 w-full flex-col items-center justify-center">
						No data for the selected period
						<p className="text-muted-foreground text-center text-sm">
							Try selecting a different period or try adding new{' '}
							{type === 'income' ? 'incomes' : 'expenses'}
						</p>
					</div>
				)}

				{data?.length > 0 && (
					<ScrollArea className="mb-2 w-full">
						<div className="flex w-full flex-col gap-2">
							{data?.map((item: any) => {
								return (
									<div key={item.name}>
										<div className="flex flex-col gap-2">
											<div className="flex items-center justify-between">
												<span className="flex items-center">
													{item.name}
													<span className="text-muted-foreground ml-2 text-xs">
														(
														{item.percentage.toFixed(
															0,
														)}
														%)
													</span>
												</span>
												<span className="text-sm">
													{formatter.format(
														item.amount,
													)}
												</span>
											</div>
											<Progress
												value={item.percentage}
												indicator={type}
											/>
										</div>
									</div>
								);
							})}
						</div>
					</ScrollArea>
				)}
			</div>
		</Card>
	);
};

export default BudgetCategoryCard;
