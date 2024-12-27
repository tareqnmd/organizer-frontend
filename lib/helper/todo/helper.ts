import { KeyboardCoordinateGetter } from '@dnd-kit/core';

const defaultInitializer = (index: number) => index;

export function createRange<T = number>(
	length: number,
	initializer: (index: number) => any = defaultInitializer,
): T[] {
	return [...new Array(length)].map((_, index) => initializer(index));
}

import {
	closestCorners,
	DroppableContainer,
	getFirstCollision,
	KeyboardCode,
} from '@dnd-kit/core';
import { DirectionEnum } from './enums';

const directions: string[] = [
	DirectionEnum.DOWN,
	DirectionEnum.RIGHT,
	DirectionEnum.UP,
	DirectionEnum.LEFT,
];

export const findContainer = (id: any, items: any) => {
	if (id in items) {
		return id;
	}
	return Object.keys(items).find((key) => items[key].includes(id));
};

export const multipleCoordinateGetter: KeyboardCoordinateGetter = (
	event,
	{ context: { active, droppableRects, droppableContainers, collisionRect } },
) => {
	if (directions.includes(event.code)) {
		event.preventDefault();

		if (!active || !collisionRect) {
			return;
		}

		const filteredContainers: DroppableContainer[] = [];

		droppableContainers.getEnabled().forEach((entry) => {
			if (!entry || entry?.disabled) {
				return;
			}

			const rect = droppableRects.get(entry.id);

			if (!rect) {
				return;
			}

			const data = entry.data.current;

			if (data) {
				const { type, children } = data;

				if (type === 'container' && children?.length > 0) {
					if (active.data.current?.type !== 'container') {
						return;
					}
				}
			}

			switch (event.code) {
				case KeyboardCode.Down:
					if (collisionRect.top < rect.top) {
						filteredContainers.push(entry);
					}
					break;
				case KeyboardCode.Up:
					if (collisionRect.top > rect.top) {
						filteredContainers.push(entry);
					}
					break;
				case KeyboardCode.Left:
					if (collisionRect.left >= rect.left + rect.width) {
						filteredContainers.push(entry);
					}
					break;
				case KeyboardCode.Right:
					if (collisionRect.left + collisionRect.width <= rect.left) {
						filteredContainers.push(entry);
					}
					break;
			}
		});

		const collisions = closestCorners({
			active,
			collisionRect: collisionRect,
			droppableRects,
			droppableContainers: filteredContainers,
			pointerCoordinates: null,
		});
		const closestId = getFirstCollision(collisions, 'id');

		if (closestId != null) {
			const newDroppable = droppableContainers.get(closestId);
			const newNode = newDroppable?.node.current;
			const newRect = newDroppable?.rect.current;

			if (newNode && newRect) {
				if (newDroppable.id === 'placeholder') {
					return {
						x:
							newRect.left +
							(newRect.width - collisionRect.width) / 2,
						y:
							newRect.top +
							(newRect.height - collisionRect.height) / 2,
					};
				}

				if (newDroppable.data.current?.type === 'container') {
					return {
						x: newRect.left + 20,
						y: newRect.top + 74,
					};
				}

				return {
					x: newRect.left,
					y: newRect.top,
				};
			}
		}
	}

	return undefined;
};
