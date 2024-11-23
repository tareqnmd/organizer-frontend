'use client';

import Title from '@/components/common/Title';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { BudgetDashboardOverviewAmountType } from '@/lib/helper/budget';
import { useState } from 'react';
import BudgetStatsCards from './overview/BudgetStatsCards';

const BudgetGrandTotal = ({
	grandTotal,
}: {
	grandTotal: BudgetDashboardOverviewAmountType;
}) => {
	const [showData, setShowData] = useState(false);
	return (
		<>
			<Button
				className="self-end"
				size="sm"
				onClick={() => setShowData((prev) => !prev)}
			>
				{showData ? 'Hide Grand Total' : 'Show Grand Total'}
			</Button>
			{showData ? (
				<>
					<Title>Grand Total</Title>
					<BudgetStatsCards amount={grandTotal} />
					<Separator />
				</>
			) : null}
		</>
	);
};

export default BudgetGrandTotal;
