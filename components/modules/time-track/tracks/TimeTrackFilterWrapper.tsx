'use client';

import Pagination from '@/components/common/paginate/Pagination';
import { TimeTrackListParams } from '@/lib/helper/time-track/types';
import { getPageNumbers, toQueryString } from '@/lib/utils';
import { baseDateFormat } from '@/lib/utils/date';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import TimeTrackFilter from './TimeTrackFilter';

const TimeTrackFilterWrapper = ({
	initialValues,
	children,
	totalTracks,
}: {
	initialValues: TimeTrackListParams;
	children: React.ReactNode;
	totalTracks: number;
}) => {
	const router = useRouter();
	const hasRendered = useRef(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [pages, setPages] = useState<number[]>([]);
	const [filterData, setFilterData] = useState(initialValues);

	const changePaginate = (value: string | number) => {
		const updatedCurrentPage =
			value === 'next'
				? currentPage + 1
				: value === 'prev'
					? currentPage - 1
					: Number(value);
		setCurrentPage(updatedCurrentPage);
		setFilterData((prev) => ({
			...prev,
			page: String(updatedCurrentPage),
		}));
	};

	let timeout: NodeJS.Timeout;
	const changePerPage = (value: number) => {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			setCurrentPage(1);
			const updatedPerPage =
				Number(value) < 10
					? 10
					: Number(value) > totalTracks && totalTracks > 10
						? totalTracks
						: Number(value);
			setFilterData((prev) => ({
				...prev,
				perPage: String(updatedPerPage),
				page: '1',
			}));
		}, 500);
	};

	const onChange = (value: string, name: string) => {
		setFilterData((prev) => ({ ...prev, [name]: value }));
	};

	const onDateRangeUpdate = (value: { from: Date; to: Date }) => {
		setFilterData((prev: TimeTrackListParams) => ({
			...prev,
			from: value?.from ? baseDateFormat(value.from) : null,
			to: value?.to ? baseDateFormat(value.to) : null,
		}));
	};

	useEffect(() => {
		if (hasRendered.current) {
			const pagination: {
				page?: string;
				perPage?: string;
			} = {};
			const dateRange: {
				from?: string;
				to?: string;
			} = {};
			if (filterData?.from && filterData?.to) {
				dateRange['from'] = filterData?.from;
				dateRange['to'] = filterData?.to;
			}
			if (
				filterData?.page &&
				filterData?.perPage &&
				!(filterData?.perPage === '10' && filterData?.page === '1')
			) {
				pagination['page'] = filterData?.page;
				pagination['perPage'] = filterData?.perPage;
			}
			router.push(
				`/time-track/tracks${toQueryString({
					isActive: filterData.isActive,
					projectId: filterData.projectId,
					...dateRange,
					...pagination,
				})}`,
			);
		} else {
			hasRendered.current = true;
		}
	}, [
		filterData.from,
		filterData.to,
		filterData.perPage,
		filterData.page,
		filterData.isActive,
		filterData.projectId,
		router,
	]);

	useEffect(() => {
		if (totalTracks > 0 && Number(filterData.perPage) > 0) {
			setPages(getPageNumbers(totalTracks, Number(filterData.perPage)));
			setCurrentPage(1);
		}
	}, [totalTracks, filterData.perPage]);

	return (
		<>
			<TimeTrackFilter
				filterData={filterData}
				onChange={onChange}
				onDateRangeUpdate={onDateRangeUpdate}
			/>
			{children}
			<Pagination
				currentPage={currentPage}
				changePaginate={changePaginate}
				perPage={Number(filterData?.perPage)}
				changePerPage={changePerPage}
				pages={pages}
				total={totalTracks}
			/>
		</>
	);
};

export default TimeTrackFilterWrapper;
