'use client';
import FormSelect from '@/components/common/input/Select';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { toQueryString } from '@/lib/common-func';
import { BudgetCategoryParamType } from '@/types/modules/budget/budget-category-types';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const BudgetCategoriesFilter = ({
	searchParams,
}: {
	searchParams: BudgetCategoryParamType;
}) => {
	const router = useRouter();
	const [filterData, setFilterData] = useState({
		category: searchParams.category ?? '',
		type: searchParams.type ?? '',
	});
	const debouncedText = useDebounce(filterData.category, 500);

	const changeHandler = (value: string, name: string) => {
		setFilterData((prev) => ({ ...prev, [name]: value }));
	};

	useEffect(() => {
		if (debouncedText || Object.keys(filterData).length > 0) {
			router.push(`/budget/type-category${toQueryString(filterData)}`);
		}
	}, [debouncedText, filterData, router]);

	return (
		<>
			<Input
				className="h-8"
				placeholder="Search Category"
				value={filterData.category}
				onChange={(e) => changeHandler(e.target.value, 'category')}
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
		</>
	);
};

export default BudgetCategoriesFilter;
