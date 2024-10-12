
import FormSelect from '@/components/common/input/Select';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const BOARDS = [
	{
		id: 1,
		workspaceId: 1,
		name: 'Board 1',
		starred: false,
		bg: 'bg-red-500',
		visibility: 'public',
		status: 'active',
	},
	{
		id: 2,
		workspaceId: 1,
		name: 'Board 2',
		starred: true,
		bg: 'bg-blue-500',
		visibility: 'public',
		status: 'active',
	},
	{
		id: 3,
		workspaceId: 1,
		name: 'Board 3',
		starred: false,
		bg: 'bg-green-500',
		visibility: 'public',
		status: 'active',
	},
];

const TaskManager = () => {

	return (
			
			<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 lg:gap-4">
				{BOARDS.map((board) => (
					<Link
						className={cn(
							'border p-2 rounded-md text-white min-h-[100px] relative',
							board.bg,
							board.status === 'active' && 'cursor-pointer'
						)}
						href={`/task/${board.id}`}
						key={board.id}
					>
						<strong>{board.name} </strong>
						<span className="absolute bottom-2 right-2">
							<Star
								size={16}
								className={cn(
									board.starred && 'text-yellow-500 fill-yellow-500'
								)}
							/>
						</span>
					</Link>
				))}
			</div>
	);
};

export default TaskManager;
