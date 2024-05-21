'use client';
import FormDateRange from '@/components/common/input/DateRange';
import FormSelect from '@/components/common/input/Select';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { toQueryString } from '@/lib/common-func';
import { BudgetTransactionParamType } from '@/types/modules/budget/budget-transaction-types';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

const BudgetTransactionFilter = ({
	searchParams,
}: {
	searchParams: BudgetTransactionParamType;
}) => {
	const router = useRouter();
	const [filterData, setFilterData] = useState({
		category: searchParams.category ?? '',
		type: searchParams.type ?? '',
	});
	const debouncedText = useDebounce(filterData.category, 500);

	const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setFilterData((prev) => ({ ...prev, category: e.target.value }));
	};

	const changeTypeHandler = (value: string) => {
		setFilterData((prev) => ({ ...prev, type: value }));
	};

	useEffect(() => {
		if (debouncedText || Object.keys(filterData).length > 0) {
			router.push(`/budget/transaction${toQueryString(filterData)}`);
		}
	}, [debouncedText, filterData, router]);

	return (
		<>
			<div className="flex gap-2 col-span-4">
				<Input
					className="h-8"
					placeholder="Search Transaction"
					value={filterData.category}
					onChange={changeInputHandler}
				/>
				<FormSelect
					extraTriggerClassName="h-8"
					input={{
						type: 'select',
						placeholder: 'Select Type',
						optionUrl: '/budget/type-select',
					}}
					field={{ onChange: changeTypeHandler, value: filterData.type }}
				/>
				<FormSelect
					extraTriggerClassName="h-8"
					input={{
						type: 'select',
						placeholder: 'Select Category',
						optionUrl: '/budget/type-category-select',
					}}
					field={{ onChange: changeTypeHandler, value: filterData.category }}
				/>
			</div>
			<FormDateRange
				triggerClassName="h-8"
				className="w-full col-span-3 xl:col-span-1 xl:col-start-3"
			/>
		</>
	);
};

export default BudgetTransactionFilter;
