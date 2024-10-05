'use client';

import { DataTable } from '@/components/common/table/DataTable';
import { Button } from '@/components/ui/button';
import { moneyFormat } from '@/lib/helper/common';
import {
	BudgetTransactionType,
	BudgetTransactionsType,
} from '@/types/modules/budget/budget-transaction-types';
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
					className="flex justify-between items-center p-0 w-full"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Category
					<ArrowDownUp className="shrink-0 ml-2 h-4 w-4" />
				</Button>
			),
			cell: ({ row }) => (
				<span className="text-nowrap">{row.getValue('categoryName')}</span>
			),
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
					<ArrowDownUp className="shrink-0 ml-2 h-4 w-4" />
				</Button>
			),
			cell: ({ row }) => (
				<div
					className={`text-nowrap p-1 text-center rounded ${typeClass(
						row.getValue('typeName')
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
					className="flex justify-between items-center p-0 w-full"
					onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
				>
					Date
					<ArrowDownUp className="shrink-0 ml-2 h-4 w-4" />
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
				<span className="text-nowrap">{row.getValue('description')}</span>
			),
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
					<ArrowDownUp className="shrink-0 ml-2 h-4 w-4" />
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
			cell: ({ row }) => <BudgetTransactionAction transaction={row.original} />,
		},
	];

	return (
		<DataTable
			columns={columns}
			data={transactions}
		/>
	);
};

export default BudgetTransactionsTable;
