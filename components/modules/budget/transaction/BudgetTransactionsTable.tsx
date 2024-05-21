'use client';

import { Pagination } from '@/components/common/pagination/Pagination';
import { DataTable } from '@/components/common/table/DataTable';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { moneyFormat } from '@/lib/common-func';
import {
	BudgetTransactionType,
	BudgetTransactionsType,
} from '@/types/modules/budget/budget-transaction-types';
import { CaretSortIcon } from '@radix-ui/react-icons';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import BudgetTransactionAction from './BudgetTransactionAction';

const BudgetTransactionsTable = ({
	transactions,
}: {
	transactions: BudgetTransactionsType;
}) => {
	const columns: ColumnDef<BudgetTransactionType>[] = [
		{
			accessorKey: 'categoryName',
			header: ({ column }) => (
				<Button
					variant="ghost"
					className="flex justify-between items-center p-0 w-full"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Category
					<CaretSortIcon className="ml-2 h-4 w-4" />
				</Button>
			),
			cell: ({ row }) => row.getValue('categoryName'),
		},
		{
			accessorKey: 'typeName',
			header: ({ column }) => (
				<Button
					variant="ghost"
					className="flex justify-between items-center p-0 w-full"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Type
					<CaretSortIcon />
				</Button>
			),
			cell: ({ row }) => row.getValue('typeName'),
		},
		{
			accessorKey: 'date',
			header: ({ column }) => (
				<Button
					variant="ghost"
					className="flex justify-between items-center p-0 w-full"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Date
					<CaretSortIcon />
				</Button>
			),
			cell: ({ row }) => format(row.getValue('date'), 'dd-MM-yyyy'),
		},
		{
			accessorKey: 'description',
			header: 'Description',
			enableHiding: false,
			cell: ({ row }) => row.getValue('description'),
		},
		{
			accessorKey: 'amount',
			header: ({ column }) => (
				<Button
					variant="ghost"
					className="flex justify-between items-center p-0 w-full"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Amount
					<CaretSortIcon className="ml-2 h-4 w-4" />
				</Button>
			),
			enableHiding: false,
			cell: ({ row }) => moneyFormat(row.getValue('amount'), 'BDT'),
		},
		{
			id: 'actions',
			header: 'Actions',
			cell: ({ row }) => <BudgetTransactionAction transaction={row.original} />,
		},
	];

	return (
		<>
			<ScrollArea>
				<DataTable
					columns={columns}
					data={transactions}
				/>
			</ScrollArea>
			<br />
			<Pagination extraClassName="justify-end" />
		</>
	);
};

export default BudgetTransactionsTable;
