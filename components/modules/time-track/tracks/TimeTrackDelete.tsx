'use client';
import { Button } from '@/components/ui/button';
import {
	Dialog,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { TimeTrackType } from '@/lib/helper/time-track';
import { getError } from '@/lib/utils';
import { useTimeTrackDeleteMutation } from '@/store/features/time-track/track/api';
import { Loader, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const TimeTrackDelete = ({ track }: { track: TimeTrackType }) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const [deleteTrack, { isLoading, isError, isSuccess, error }] =
		useTimeTrackDeleteMutation();

	const deleteHandler = () => {
		deleteTrack(track.id);
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success(`Transaction successfully deleted`);
			setOpen(false);
			router.refresh();
		} else if (isError) {
			toast.error(getError(error));
		}
	}, [error, isError, isSuccess, router]);

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Trash
					className="shrink-0 cursor-pointer stroke-status-danger transition-all active:scale-75"
					size={16}
				/>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>Delete Time Track</DialogTitle>
				</DialogHeader>
				Do you want to delete this Time Track?
				<DialogFooter>
					<Button
						onClick={deleteHandler}
						className="flex items-center gap-1 bg-red-900"
						disabled={isLoading}
					>
						{isLoading ? (
							<Loader className="animate-spin" size={16} />
						) : null}
						Delete
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default TimeTrackDelete;
