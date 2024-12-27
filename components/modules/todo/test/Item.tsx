import { cn } from '@/lib/utils';
import { GripVertical, X } from 'lucide-react';
import React, { useEffect } from 'react';
import styles from './Item.module.css';

export const Item = React.memo(
	React.forwardRef<any, any>(
		(
			{
				dragOverlay,
				dragging,
				disabled,
				fadeIn,
				handleProps,
				height,
				index,
				listeners,
				onRemove,
				renderItem,
				sorting,
				style,
				transition,
				transform,
				value,
				wrapperStyle,
				...props
			},
			ref,
		) => {
			useEffect(() => {
				if (!dragOverlay) {
					return;
				}

				document.body.style.cursor = 'grabbing';

				return () => {
					document.body.style.cursor = '';
				};
			}, [dragOverlay]);

			return renderItem ? (
				renderItem({
					dragOverlay: Boolean(dragOverlay),
					dragging: Boolean(dragging),
					sorting: Boolean(sorting),
					index,
					fadeIn: Boolean(fadeIn),
					listeners,
					ref,
					style,
					transform,
					transition,
					value,
				})
			) : (
				<li
					className={cn(
						styles.wrapper,
						fadeIn && styles.fadeIn,
						sorting && styles.sorting,
						dragOverlay && styles.dragOverlay,
					)}
					style={
						{
							...wrapperStyle,
							transition: [transition, wrapperStyle?.transition]
								.filter(Boolean)
								.join(', '),
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
							styles.item,
							dragging && styles.dragging,
							dragOverlay && styles.dragOverlay,
							disabled && styles.disabled,
						)}
						style={style}
						{...props}
					>
						<div className="flex items-center gap-2">
							<GripVertical {...handleProps} {...listeners} />
						</div>
						{value}
						<span>
							{onRemove ? <X onClick={onRemove} /> : null}
						</span>
					</div>
				</li>
			);
		},
	),
);
