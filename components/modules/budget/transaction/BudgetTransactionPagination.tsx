import {
	Pagination as Page,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';

const BudgetTransactionPagination = ({}) => {
	return (
		<Page className="justify-end">
			<PaginationContent>
				<PaginationItem>
					<PaginationPrevious href="#" />
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">1</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink
						href="#"
						isActive
					>
						2
					</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationLink href="#">3</PaginationLink>
				</PaginationItem>
				<PaginationItem>
					<PaginationEllipsis />
				</PaginationItem>
				<PaginationItem>
					<PaginationNext href="#" />
				</PaginationItem>
			</PaginationContent>
		</Page>
	);
};

export default BudgetTransactionPagination;
