'use client';

import { DataTable } from '@/components/common/table/DataTable';
import { Button } from '@/components/ui/button';
import { formatTimeFromMinutes, TimeTrackType } from '@/lib/helper/time-track';
import { baseDateTimeFormat } from '@/lib/utils';
import { ColumnDef } from '@tanstack/react-table';
import { ArrowDownUp } from 'lucide-react';
import TimeTrackAction from './TimeTrackAction';
import TimeTrackCounting from './TimeTrackCounting';

const typeClass = (type: string) =>
	type === 'Expense' ? 'expense' : type === 'Income' ? 'income' : 'neutral';

const TimeTrackTracksTable = ({ tracks }: { tracks: TimeTrackType[] }) => {
	const columns: ColumnDef<TimeTrackType>[] = [
		{
			accessorKey: 'projectName',
			header: ({ column }) => (
				<Button
					variant="ghost"
					className="flex w-full items-center justify-between p-0"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					Project
					<ArrowDownUp className="ml-2 h-4 w-4 shrink-0" />
				</Button>
			),
			cell: ({ row }) => (
				<span className="flex items-center gap-1 text-nowrap">
					{row.getValue('projectName')}
				</span>
			),
		},
		{
			accessorKey: 'baseTime',
			header: ({ column }) => (
				<Button
					variant="ghost"
					className="flex w-full items-center justify-between p-0"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					Base Time
					<ArrowDownUp className="ml-2 h-4 w-4 shrink-0" />
				</Button>
			),
			cell: ({ row }) => (
				<span className="text-nowrap">
					{row.getValue('baseTime')
						? formatTimeFromMinutes(row.getValue('baseTime'))
						: 'N/A'}
				</span>
			),
		},
		{
			accessorKey: 'timeTracked',
			header: ({ column }) => (
				<Button
					variant="ghost"
					className="flex w-full items-center justify-between p-0"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					Time Tracked
					<ArrowDownUp className="ml-2 h-4 w-4 shrink-0" />
				</Button>
			),
			cell: ({ row }) => (
				<span className="text-nowrap">
					<TimeTrackCounting
						timeTracked={row.original.timeTracked}
						isActive={row.original.isActive}
						startTime={row.original.startTime}
					/>
				</span>
			),
		},
		{
			accessorKey: 'startTime',
			header: 'Start Time',
			enableHiding: false,
			cell: ({ row }) => (
				<span className="text-nowrap">
					{baseDateTimeFormat(row.getValue('startTime'))}
				</span>
			),
		},
		{
			accessorKey: 'endTime',
			header: ({ column }) => (
				<Button
					variant="ghost"
					className="flex w-full items-center justify-between p-0"
					onClick={() =>
						column.toggleSorting(column.getIsSorted() === 'asc')
					}
				>
					End Time
					<ArrowDownUp className="ml-2 h-4 w-4 shrink-0" />
				</Button>
			),
			enableHiding: false,
			cell: ({ row }) => (
				<span className="text-nowrap">
					{row.getValue('endTime')
						? baseDateTimeFormat(row.getValue('endTime'))
						: 'N/A'}
				</span>
			),
		},
		{
			id: 'actions',
			header: 'Actions',
			cell: ({ row }) => <TimeTrackAction track={row.original} />,
		},
	];

	return <DataTable columns={columns} data={tracks} />;
};

export default TimeTrackTracksTable;
