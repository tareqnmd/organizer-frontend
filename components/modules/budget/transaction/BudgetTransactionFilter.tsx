'use client';
import FormDateRange from '@/components/common/input/DateRange';
import FormSelect from '@/components/common/input/Select';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { toQueryString } from '@/lib/common-func';
import { BudgetTransactionParamType } from '@/types/modules/budget/budget-transaction-types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const BudgetTransactionFilter = ({
	searchParams,
}: {
	searchParams: BudgetTransactionParamType;
}) => {
	const router = useRouter();
	const [filterData, setFilterData] = useState({
		category: searchParams.category ?? '',
		type: searchParams.type ?? '',
		transaction: searchParams.transaction ?? '',
	});
	const debouncedText = useDebounce(filterData.category, 500);

	const changeHandler = (value: string, name: string) => {
		setFilterData((prev) => ({ ...prev, [name]: value }));
	};

	useEffect(() => {
		if (debouncedText || Object.keys(filterData).length > 0) {
			router.push(`/budget/transaction${toQueryString(filterData)}`);
		}
	}, [debouncedText, filterData, router]);

	return (
		<>
			<Input
				className="h-8"
				placeholder="Search Transaction"
				value={filterData.transaction}
				onChange={(e) => changeHandler(e.target.value, 'transaction')}
			/>
			<FormDateRange className="h-8" />
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
		</>
	);
};

export default BudgetTransactionFilter;
