import React, { forwardRef } from 'react';

import { cn } from '@/lib/utils';
import { GripVertical } from 'lucide-react';
import AddCard from '../card/AddCard';
import ListDelete from './ListDelete';
import ListTitle from './ListTitle';

export interface Props {
	children: React.ReactNode;
	id?: string;
	style?: React.CSSProperties;
	handleProps?: React.HTMLAttributes<any>;
	shadow?: boolean;
	onClick?(): void;
	onRemove?(): void;
	height?: number;
	itemsLength?: number;
}

export const Container = forwardRef<HTMLDivElement, Props>(
	(
		{
			children,
			handleProps,
			onClick,
			onRemove,
			id,
			style,
			height,
			shadow,
			itemsLength = 0,
			...props
		}: Props,
		ref,
	) => {
		const Component = onClick ? 'button' : 'div';

		return (
			<Component
				{...props}
				ref={ref as any}
				style={style}
				className={cn(
					'flex min-w-[300px] flex-col overflow-hidden rounded-lg border bg-white text-dark transition-colors duration-300',
					shadow && 'shadow-lg',
				)}
				onClick={onClick}
				tabIndex={onClick ? 0 : undefined}
			>
				{id ? (
					<div className="flex items-center justify-between gap-2 rounded-t-lg border-b border-gray-200 bg-white p-2">
						<GripVertical
							className="shrink-0 cursor-pointer focus:outline-none"
							size={16}
							{...handleProps}
						/>
						<ListTitle listId={id} />
						<ListDelete listId={id} />
					</div>
				) : null}
				{itemsLength > 0 && (
					<ul
						className="bg-gray flex flex-col gap-2 overflow-hidden overflow-y-auto p-2"
						style={
							shadow
								? {}
								: { maxHeight: height ? height - 100 : 0 }
						}
					>
						{children}
					</ul>
				)}
				{id && <AddCard listId={id} />}
			</Component>
		);
	},
);

Container.displayName = 'Container';
