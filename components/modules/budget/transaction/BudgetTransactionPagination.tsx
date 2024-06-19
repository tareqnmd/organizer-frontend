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
	return (
		<Page className="justify-end">
			<PaginationContent>
				{pages?.length > 1 && (
					<PaginationItem>
						<PaginationPrevious />
					</PaginationItem>
				)}
				{pages?.map((paginate, index) => (
					<PaginationItem key={index}>
						<PaginationLink isActive={currentPage === paginate}>
							{paginate}
						</PaginationLink>
					</PaginationItem>
				))}
				{pages?.length > 1 && (
					<PaginationItem>
						<PaginationNext />
					</PaginationItem>
				)}
			</PaginationContent>
		</Page>
	);
};

export default BudgetTransactionPagination;
