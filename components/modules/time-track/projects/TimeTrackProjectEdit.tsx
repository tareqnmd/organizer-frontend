'use client';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { TimeTrackProjectType } from '@/lib/helper/time-track';
import { EditIcon } from 'lucide-react';
import { useState } from 'react';
import TimeTrackProjectForm from './TimeTrackProjectForm';
const TimeTrackProjectEdit = ({
	project,
}: {
	project: TimeTrackProjectType;
}) => {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<EditIcon
					className="cursor-pointer transition-all active:scale-75"
					size={16}
				/>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>Edit Category</DialogTitle>
				</DialogHeader>
				<TimeTrackProjectForm setOpen={setOpen} project={project} />
			</DialogContent>
		</Dialog>
	);
};

export default TimeTrackProjectEdit;
