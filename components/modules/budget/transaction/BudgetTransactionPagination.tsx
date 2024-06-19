import {
	Pagination as Page,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';

const BudgetTransactionPagination = ({
	currentPage,
	pages,
	changePaginate,
}: {
	currentPage: number;
	pages: number[];
	changePaginate: (agr: string | number) => void;
}) => {
	return pages?.length > 1 ? (
		<Page className="justify-end">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious onClick={() => changePaginate('prev')} />
				</PaginationItem>
				{pages?.map((paginate, index) => (
					<PaginationItem key={index}>
						<PaginationLink
							onClick={() => changePaginate(paginate)}
							isActive={currentPage === paginate}
						>
							{paginate}
						</PaginationLink>
					</PaginationItem>
				))}
				<PaginationItem>
					<PaginationNext onClick={() => changePaginate('next')} />
				</PaginationItem>
			</PaginationContent>
		</Page>
	) : null;
};

export default BudgetTransactionPagination;
