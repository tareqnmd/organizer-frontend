import {
	closestCorners,
	DndContext,
	KeyboardSensor,
	PointerSensor,
	useSensor,
	useSensors,
} from '@dnd-kit/core';
import { sortableKeyboardCoordinates } from '@dnd-kit/sortable';

const DnDContextLayout = ({
	children,
	handleDragEnd,
	handleDragOver,
	handleDragStart,
}: {
	children: React.ReactNode;
	handleDragEnd?: any;
	handleDragOver?: any;
	handleDragStart?: any;
}) => {
	const sensors = useSensors(
		useSensor(PointerSensor),
		useSensor(KeyboardSensor, {
			coordinateGetter: sortableKeyboardCoordinates,
		})
	);
	return (
		<DndContext
			sensors={sensors}
			collisionDetection={closestCorners}
			onDragEnd={handleDragEnd}
			onDragOver={handleDragOver}
			onDragStart={handleDragStart}
		>
			{children}
		</DndContext>
	);
};

export default DnDContextLayout;
