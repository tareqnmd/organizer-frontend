'use client';

import { DataTable } from '@/components/common/table/DataTable';
import { Button } from '@/components/ui/button';
import {
	BudgetTransactionType,
	BudgetTransactionsType,
} from '@/lib/helper/modules/budget';
import { moneyFormat } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import { format } from 'date-fns';
import { ArrowDownUp } from 'lucide-react';
import BudgetTransactionAction from './BudgetTransactionAction';

const typeClass = (type: string) => (type === 'Expense' ? 'expense' : 'income');

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
					className="flex w-full items-center justify-between p-0"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					Category
					<ArrowDownUp className="ml-2 h-4 w-4 shrink-0" />
				</Button>
			),
			cell: ({ row }) => (
				<span className="text-nowrap">
					{row.getValue('categoryName')}
				</span>
			),
		},
		{
			accessorKey: 'typeName',
			header: ({ column }) => (
				<Button
					variant="ghost"
					className="flex w-full items-center justify-between p-0"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					Type
					<ArrowDownUp className="ml-2 h-4 w-4 shrink-0" />
				</Button>
			),
			cell: ({ row }) => (
				<div
					className={`text-nowrap rounded p-1 text-center ${typeClass(
						row.getValue('typeName'),
					)}`}
				>
					{row.getValue('typeName')}
				</div>
			),
		},
		{
			accessorKey: 'date',
			header: ({ column }) => (
				<Button
					variant="ghost"
					className="flex w-full items-center justify-between p-0"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					Date
					<ArrowDownUp className="ml-2 h-4 w-4 shrink-0" />
				</Button>
			),
			cell: ({ row }) => (
				<span className="text-nowrap">
					{format(row.getValue('date'), 'dd-MM-yyyy')}
				</span>
			),
		},
		{
			accessorKey: 'description',
			header: 'Description',
			enableHiding: false,
			cell: ({ row }) => (
				<span className="text-nowrap">
					{row.getValue('description')}
				</span>
			),
		},
		{
			accessorKey: 'amount',
			header: ({ column }) => (
				<Button
					variant="ghost"
					className="flex w-full items-center justify-between p-0"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					Amount
					<ArrowDownUp className="ml-2 h-4 w-4 shrink-0" />
				</Button>
			),
			enableHiding: false,
			cell: ({ row }) => (
				<span className="text-nowrap">
					{moneyFormat(row.getValue('amount'), 'BDT')}
				</span>
			),
		},
		{
			id: 'actions',
			header: 'Actions',
			cell: ({ row }) => (
				<BudgetTransactionAction transaction={row.original} />
			),
		},
	];

	return <DataTable columns={columns} data={transactions} />;
};

export default BudgetTransactionsTable;
