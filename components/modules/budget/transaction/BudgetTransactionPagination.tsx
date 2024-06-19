import {
	Pagination as Page,
	PaginationContent,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious,
} from '@/components/ui/pagination';
import { cn } from '@/lib/utils';

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
					<PaginationPrevious
						className={cn(
							'cursor-pointe',
							currentPage <= 1 && 'pointer-events-none opacity-50'
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
							'cursor-pointe',currentPage >= pages?.length && 'pointer-events-none opacity-50'
						)}
						onClick={() => changePaginate('next')}
					/>
				</PaginationItem>
			</PaginationContent>
		</Page>
	) : null;
};

export default BudgetTransactionPagination;
