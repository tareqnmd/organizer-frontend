import React, { forwardRef } from 'react';

import { cn } from '@/lib/utils';
import { GripVertical, X } from 'lucide-react';

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
					'flex min-h-[200px] min-w-[350px] flex-col overflow-hidden rounded-lg border border-gray-200 bg-white transition-colors duration-300',
					shadow && 'shadow-lg',
				)}
				onClick={onClick}
				tabIndex={onClick ? 0 : undefined}
			>
				{label ? (
					<div className="flex items-center justify-between rounded-t-lg border-b border-gray-200 bg-white p-2">
						<div className="ml-3">
							<GripVertical {...handleProps} />
						</div>
						<div>{label}</div>
						<div>{onRemove ? <X onClick={onRemove} /> : null}</div>
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
