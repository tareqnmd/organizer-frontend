import {
	Pagination as Page,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';

const Pagination = ({
	currentPage,
	pages,
	changePaginate,
	changePerPage,
	perPage,
	total,
}: {
	currentPage: number;
	perPage: number;
	pages: number[];
	changePaginate: (agr: string | number) => void;
	changePerPage: (agr: number) => void;
	total: number;
}) => {
	return (
		<Page className="flex-wrap items-center justify-end gap-4 sm:flex-nowrap sm:gap-2">
			<div className="per-page-show flex items-center gap-2 text-sm">
				Showing
				<span className="font-semibold">
					{currentPage * perPage - (perPage - 1)}
				</span>
				to
				<span className="font-semibold">
					{currentPage * perPage -
						(currentPage === pages.length
							? (currentPage * perPage) % total
							: 0)}
				</span>
			</div>
			<div className="divider h-3 w-[1px] bg-black"></div>
			<div className="per-page-change flex items-center gap-2 text-sm">
				<span className="text-sm">Per Page</span>
				<input
					type="number"
					defaultValue={perPage}
					onChange={(e) => changePerPage(parseInt(e.target.value))}
					min={10}
					className="inp-wpn w-8 rounded border-2 border-black p-1 text-center"
				/>
			</div>
			<div className="divider hidden h-3 w-[1px] bg-black sm:block"></div>
			<PaginationContent className="justify-end">
				<PaginationItem>
					<PaginationPrevious
						className={cn(
							'cursor-pointe pl-0',
							currentPage <= 1 &&
								'pointer-events-none opacity-50',
						)}
						onClick={() => changePaginate('prev')}
					/>
				</PaginationItem>
				{pages?.map((paginate, index) => (
					<PaginationItem key={index}>
						<PaginationLink
							className="cursor-pointer"
							onClick={() => changePaginate(paginate)}
							isActive={currentPage === paginate}
						>
							{paginate}
						</PaginationLink>
					</PaginationItem>
				))}
				<PaginationItem>
					<PaginationNext
						className={cn(
							'cursor-pointer pr-0',
							currentPage >= pages?.length &&
								'pointer-events-none opacity-50',
						)}
						onClick={() => changePaginate('next')}
					/>
				</PaginationItem>
			</PaginationContent>
		</Page>
	);
};

export default Pagination;
