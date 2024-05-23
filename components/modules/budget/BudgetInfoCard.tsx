import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const BudgetInfoCard = ({
	children,
	className = '',
}: {
	children: ReactNode;
	className?: string;
}) => {
	return (
		<Card
			className={cn(
				'p-3 flex justify-between items-center bg-green-200',
				className
			)}
		>
			{children}
		</Card>
	);
};

export default BudgetInfoCard;
