import {
	AnimateLayoutChanges,
	defaultAnimateLayoutChanges,
	useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Container } from './Container';

const animateLayoutChanges: AnimateLayoutChanges = (args: any) =>
	defaultAnimateLayoutChanges({ ...args, wasDragging: true });

function DroppableContainer({ children, id, items, style, ...props }: any) {
	const {
		attributes,
		isDragging,
		listeners,
		setNodeRef,
		transition,
		transform,
	} = useSortable({
		id,
		data: {
			type: 'container',
			children: items,
		},
		animateLayoutChanges,
	});

	return (
		<Container
			ref={setNodeRef}
			style={{
				...style,
				transition,
				transform: CSS.Translate.toString(transform),
				opacity: isDragging ? 0.5 : undefined,
			}}
			handleProps={{
				...attributes,
				...listeners,
			}}
			{...props}
		>
			{children}
		</Container>
	);
}

export default DroppableContainer;
