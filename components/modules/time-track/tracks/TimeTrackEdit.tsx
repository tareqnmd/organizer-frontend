'use client';
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { TimeTrackType } from '@/lib/helper/time-track';
import { EditIcon } from 'lucide-react';
import { useState } from 'react';
import TimeTrackForm from './TimeTrackForm';
const TimeTrackEdit = ({ track }: { track: TimeTrackType }) => {
	const [open, setOpen] = useState(false);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<EditIcon
					className="shrink-0 cursor-pointer transition-all active:scale-75"
					size={16}
				/>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>Edit Category</DialogTitle>
				</DialogHeader>
				<TimeTrackForm setOpen={setOpen} track={track} />
			</DialogContent>
		</Dialog>
	);
};

export default TimeTrackEdit;
