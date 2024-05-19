'use client';
import FormSelect from '@/components/common/input/Select';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { toQueryString } from '@/lib/common-func';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

const BudgetCategoriesFilter = () => {
	const router = useRouter();
	const [filterData, setFilterData] = useState({
		category: '',
		type: '',
	});
	const debouncedText = useDebounce(filterData.category, 500);

	const changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setFilterData((prev) => ({ ...prev, search: e.target.value }));
	};

	const changeTypeHandler = (value: string) => {
		setFilterData((prev) => ({ ...prev, type: value }));
	};

	useEffect(() => {
		if (debouncedText || filterData) {
			router.push(`/budget/type-category${toQueryString(filterData)}`);
		}
	}, [debouncedText, filterData, router]);

	return (
		<>
			<Input
				className="h-8"
				placeholder="Search Category"
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
		</>
	);
};

export default BudgetCategoriesFilter;
