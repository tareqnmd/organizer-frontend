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
}: {
	currentPage: number;
	pages: number[];
}) => {
	return pages?.length > 1 ? (
		<Page className="justify-end">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious />
				</PaginationItem>
				{pages?.map((paginate, index) => (
					<PaginationItem key={index}>
						<PaginationLink isActive={currentPage === paginate}>
							{paginate}
						</PaginationLink>
					</PaginationItem>
				))}
				<PaginationItem>
					<PaginationNext />
				</PaginationItem>
			</PaginationContent>
		</Page>
	) : null;
};

export default BudgetTransactionPagination;
