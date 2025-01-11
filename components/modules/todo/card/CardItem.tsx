import { cn } from '@/lib/utils';
import { getBoardState } from '@/store/features/todo/board/slice';
import React from 'react';
import { useSelector } from 'react-redux';
import CardDelete from './CardDelete';
import CardModal from './CardModal';

const CardItem = React.memo(
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
						<CardModal cardId={value} />
						<CardDelete cardId={value} />
					</div>
				</li>
			);
		},
	),
);

export default CardItem;
