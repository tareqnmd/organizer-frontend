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
import { TimeTrackProjectType } from '@/lib/helper/time-track';
import { getError } from '@/lib/utils';
import { useTimeTrackProjectDeleteMutation } from '@/store/features/time-track/project/api';
import { Loader, Trash } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';
const TimeTrackProjectDelete = ({
	project,
}: {
	project: TimeTrackProjectType;
}) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const [deleteProject, { isLoading, isError, isSuccess, error }] =
		useTimeTrackProjectDeleteMutation();

	const deleteHandler = () => {
		deleteProject(project.id);
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
					className="cursor-pointer stroke-status-danger transition-all active:scale-75"
					size={16}
				/>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>Delete Project ({project.name})</DialogTitle>
				</DialogHeader>
				Do you want to delete the Project?
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

export default TimeTrackProjectDelete;
