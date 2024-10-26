'use client';
import Pagination from '@/components/common/paginate/Pagination';
import { useDebounce } from '@/hooks/useDebounce';
import { BudgetTransactionParamType } from '@/lib/helper/modules/budget';
import { baseDateFormat, getPageNumbers, toQueryString } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect, useRef, useState } from 'react';
import BudgetTransactionAdd from './BudgetTransactionAdd';
import BudgetTransactionFilter from './BudgetTransactionFilter';

const BudgetTransactionsWrapper = ({
	children,
	searchOptions,
	totalTransactions,
}: {
	children: ReactNode;
	searchOptions: BudgetTransactionParamType;
	totalTransactions: number;
}) => {
	const router = useRouter();
	const hasRendered = useRef(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [pages, setPages] = useState<number[]>([]);
	const [filterData, setFilterData] = useState(searchOptions);
	const debouncedText = useDebounce(filterData?.transaction ?? '', 500);

	const changeHandler = (value: string, name: string) => {
		setFilterData((prev) => ({ ...prev, [name]: value }));
	};

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

	const dateRangeUpdate = (value: { from: Date; to: Date }) => {
		setFilterData((prev) => ({
			...prev,
			from: value?.from ? baseDateFormat(value.from) : '',
			to: value?.to ? baseDateFormat(value.to) : '',
		}));
	};

	let timeout: any;
	const changePerPage = (value: number) => {
		if (timeout) clearTimeout(timeout);
		timeout = setTimeout(() => {
			setCurrentPage(1);
			const updatedPerPage =
				Number(value) < 10
					? 10
					: Number(value) > totalTransactions &&
						  totalTransactions > 10
						? totalTransactions
						: Number(value);
			setFilterData((prev) => ({
				...prev,
				perPage: String(updatedPerPage),
				page: '1',
			}));
		}, 500);
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
				`/budget/transaction${toQueryString({
					type: filterData.type,
					category: filterData.category,
					transaction: debouncedText,
					...dateRange,
					...pagination,
				})}`,
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
		filterData.perPage,
		filterData.page,
		router,
	]);

	useEffect(() => {
		if (totalTransactions > 0 && Number(filterData.perPage) > 0) {
			setPages(
				getPageNumbers(totalTransactions, Number(filterData.perPage)),
			);
			setCurrentPage(1);
		}
	}, [totalTransactions, filterData.perPage]);

	return (
		<div className="flex flex-col gap-4">
			<div className="grid grid-cols-4 gap-2">
				<BudgetTransactionFilter
					filterData={filterData}
					onChange={changeHandler}
					onDateRangeUpdate={dateRangeUpdate}
				/>
				<BudgetTransactionAdd />
			</div>
			{children}
			<Pagination
				currentPage={currentPage}
				changePaginate={changePaginate}
				perPage={Number(filterData?.perPage)}
				changePerPage={changePerPage}
				pages={pages}
				total={totalTransactions}
			/>
		</div>
	);
};

export default BudgetTransactionsWrapper;
