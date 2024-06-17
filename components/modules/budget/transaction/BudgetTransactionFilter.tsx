'use client';
import FormDateRange from '@/components/common/input/DateRange';
import FormSelect from '@/components/common/input/Select';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { toQueryString } from '@/lib/helper/common';
import { baseDateFormat } from '@/lib/helper/date';
import { BudgetTransactionParamType } from '@/types/modules/budget/budget-transaction-types';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const BudgetTransactionFilter = ({
	searchParams,
}: {
	searchParams: BudgetTransactionParamType;
}) => {
	const router = useRouter();
	const hasRendered = useRef(false);
	const [filterData, setFilterData] = useState({
		category: searchParams.category ?? '',
		type: searchParams.type ?? '',
		transaction: searchParams.transaction ?? '',
		from: searchParams.from ?? '',
		to: searchParams.to ?? '',
	});
	const debouncedText = useDebounce(filterData.transaction, 500);

	const changeHandler = (value: string, name: string) => {
		setFilterData((prev) => ({ ...prev, [name]: value }));
	};

	useEffect(() => {
		if (hasRendered.current) {
			const dateRange: any = {};
			if (filterData?.from && filterData?.to) {
			}
			router.push(
				`/budget/transaction${toQueryString({
					type: filterData.type,
					category: filterData.category,
					transaction: debouncedText,
					from: filterData.from,
					to: filterData.to,
				})}`
			);
		} else {
			hasRendered.current = true;
		}
	}, [
		debouncedText,
		filterData.type,
		filterData.category,
		filterData.from,
		filterData.to,
		router,
	]);

	const dateRangeUpdate = (value: { from: Date; to: Date }) => {
		setFilterData((prev) => ({
			...prev,
			from: value?.from ? baseDateFormat(value.from) : '',
			to: value?.to ? baseDateFormat(value.to) : '',
		}));
	};

	return (
		<>
			<div className="flex gap-2 col-span-4">
				<Input
					className="h-8"
					placeholder="Search By Description"
					value={filterData.transaction}
					onChange={(e) => changeHandler(e.target.value, 'transaction')}
				/>

				<FormSelect
					extraTriggerClassName="h-8"
					input={{
						type: 'select',
						placeholder: 'Select Type',
						optionUrl: '/budget/type-select',
					}}
					field={{
						onChange: (value: string) => changeHandler(value, 'type'),
						value: filterData.type,
					}}
				/>
				<FormSelect
					extraTriggerClassName="h-8"
					input={{
						type: 'select',
						placeholder: 'Select Category',
						optionUrl: '/budget/type-category-select',
					}}
					field={{
						onChange: (value: string) => changeHandler(value, 'category'),
						value: filterData.category,
					}}
				/>
			</div>
			<FormDateRange
				onUpdate={dateRangeUpdate}
				triggerClassName="h-8"
				className="w-full col-span-3 xl:col-span-1 xl:col-start-3"
			/>
		</>
	);
};

export default BudgetTransactionFilter;
