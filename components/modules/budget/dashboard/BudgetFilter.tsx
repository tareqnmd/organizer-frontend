'use client';
import FormDateRange from '@/components/common/input/DateRange';
import { toQueryString } from '@/helper/shared/common';
import { baseDateFormat } from '@/helper/shared/date';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const BudgetFilter = ({ searchParams = {} }: { searchParams?: any }) => {
	const [filterData, setFilterData] = useState(searchParams);
	const hasRendered = useRef(false);
	const router = useRouter();

	const dateRangeUpdate = (value: { from: Date; to: Date }) => {
		setFilterData((prev: any) => ({
			...prev,
			from: value?.from ? baseDateFormat(value.from) : '',
			to: value?.to ? baseDateFormat(value.to) : '',
		}));
	};

	useEffect(() => {
		if (hasRendered.current) {
			const dateRange: {
				from?: string;
				to?: string;
			} = {};
			if (filterData?.from && filterData?.to) {
				dateRange['from'] = filterData?.from;
				dateRange['to'] = filterData?.to;
			}
			router.push(
				`/budget${toQueryString({
					...dateRange,
				})}`
			);
		} else {
			hasRendered.current = true;
		}
	}, [filterData.from, filterData.to, router]);

	return (
		<>
			<FormDateRange
				onUpdate={dateRangeUpdate}
				triggerClassName="h-8"
				className="w-full col-span-3 xl:col-span-1 xl:col-start-3"
				initialValues={{
					from: filterData.from,
					to: filterData.to,
				}}
			/>
		</>
	);
};

export default BudgetFilter;
