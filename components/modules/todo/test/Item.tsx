import { cn } from '@/lib/utils';
import { getBoardState } from '@/store/features/todo/card/slice';
import { Trash } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';

const Item = React.memo(
	React.forwardRef<any, any>(
		(
			{
				value,
				dragging,
				handleProps,
				index,
				transition,
				transform,
				listeners,
			},
			ref,
		) => {
			const { getBoardCard } = useSelector(getBoardState);

			return (
				<li
					className={cn('todo-cards-wrapper')}
					style={
						{
							transition: [transition].filter(Boolean).join(', '),
							'--translate-x': transform
								? `${Math.round(transform.x)}px`
								: undefined,
							'--translate-y': transform
								? `${Math.round(transform.y)}px`
								: undefined,
							'--scale-x': transform?.scaleX
								? `${transform.scaleX}`
								: undefined,
							'--scale-y': transform?.scaleY
								? `${transform.scaleY}`
								: undefined,
							'--index': index,
						} as React.CSSProperties
					}
					ref={ref}
				>
					<div
						className={cn(
							'relative flex w-full cursor-pointer items-center justify-between gap-2 rounded-md border bg-light p-2 text-black shadow-sm',
							dragging && 'opacity-50',
						)}
						{...handleProps}
						{...listeners}
					>
						<span className="truncate text-sm">
							{getBoardCard(value)?.title}
						</span>
						<Trash
							className="shrink-0"
							size={16}
							onClick={() => {}}
						/>
					</div>
				</li>
			);
		},
	),
);

export default Item;
