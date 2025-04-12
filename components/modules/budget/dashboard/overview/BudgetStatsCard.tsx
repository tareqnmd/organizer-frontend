'use client';

import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ReactNode, useCallback } from 'react';
import CountUp from 'react-countup';

const BudgetStatsCard = ({
	formatter,
	value,
	title,
	icon,
	className,
}: {
	formatter: Intl.NumberFormat;
	icon: ReactNode;
	title: String;
	value: number;
	className?: string;
}) => {
	const formatFn = useCallback(
		(value: number) => {
			return formatter.format(value);
		},
		[formatter],
	);

	return (
		<Card className={cn('flex w-full items-center gap-2 p-2', className)}>
			{icon}
			<div className="flex flex-col items-start gap-0">
				<p className="text-xs md:text-sm">{title}</p>
				<CountUp
					preserveValue
					redraw={false}
					end={value}
					decimals={2}
					formattingFn={formatFn}
					className="text-md"
				/>
			</div>
		</Card>
	);
};
export default BudgetStatsCard;
