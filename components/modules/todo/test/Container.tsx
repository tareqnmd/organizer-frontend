import React, { forwardRef } from 'react';

import { cn } from '@/lib/utils';
import { GripVertical, Trash } from 'lucide-react';

export interface Props {
	children: React.ReactNode;
	label?: string;
	style?: React.CSSProperties;
	handleProps?: React.HTMLAttributes<any>;
	shadow?: boolean;
	onClick?(): void;
	onRemove?(): void;
}

export const Container = forwardRef<HTMLDivElement, Props>(
	(
		{
			children,
			handleProps,
			onClick,
			onRemove,
			label,
			style,
			shadow,
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
					'flex min-w-[300px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-colors duration-300',
					shadow && 'shadow-lg',
				)}
				onClick={onClick}
				tabIndex={onClick ? 0 : undefined}
			>
				{label ? (
					<div className="flex items-center justify-between rounded-t-lg border-b border-gray-200 bg-white p-2">
						<GripVertical
							className="cursor-pointer focus:outline-none"
							size={16}
							{...handleProps}
						/>
						<div>{label}</div>
						{onRemove ? (
							<Trash
								className="cursor-pointer focus:outline-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0"
								size={16}
								onClick={onRemove}
							/>
						) : (
							<div className="w-4" />
						)}
					</div>
				) : null}
				<ul className="bg-gray flex flex-col gap-2 overflow-hidden p-4">
					{children}
				</ul>
			</Component>
		);
	},
);

Container.displayName = 'Container';
