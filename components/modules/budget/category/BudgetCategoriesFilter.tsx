'use client';
import FormSelect from '@/components/common/input/Select';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { BudgetCategoryParamType } from '@/lib/helper/budget';
import { FormInputType } from '@/lib/helper/shared/enum';
import { toQueryString } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

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
	const hasRendered = useRef(false);
	const changeHandler = (value: string, name: string) => {
		setFilterData((prev) => ({ ...prev, [name]: value }));
	};

	useEffect(() => {
		if (hasRendered.current) {
			router.push(
				`/budget/type-category${toQueryString({
					type: filterData.type,
					category: debouncedText,
				})}`,
			);
		} else {
			hasRendered.current = true;
		}
	}, [debouncedText, filterData.type, router]);

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
					type: FormInputType.SELECT,
					placeholder: 'Select Type',
					optionUrl: '/budget/type-select',
					name: 'type',
				}}
				field={
					{
						onChange: (value: string) =>
							changeHandler(value, 'type'),
						value: filterData.type,
					} as ControllerRenderProps
				}
			/>
		</>
	);
};

export default BudgetCategoriesFilter;
