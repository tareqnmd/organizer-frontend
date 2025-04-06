'use client';
import { Input } from '@/components/ui/input';
import { useDebounce } from '@/hooks/useDebounce';
import { BudgetCategoryParamType } from '@/lib/helper/budget';
import { toQueryString } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const BudgetCategoriesFilter = ({
	searchParams,
}: {
	searchParams: BudgetCategoryParamType;
}) => {
	const router = useRouter();
	const [filterData, setFilterData] = useState({
		category: searchParams.category ?? '',
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
					category: debouncedText,
				})}`,
			);
		} else {
			hasRendered.current = true;
		}
	}, [debouncedText, router]);

	return (
		<Input
			className="h-8"
			placeholder="Search Category"
			value={filterData.category}
			onChange={(e) => changeHandler(e.target.value, 'category')}
		/>
	);
};

export default BudgetCategoriesFilter;
