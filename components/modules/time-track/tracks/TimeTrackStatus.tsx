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
import { cn, getError } from '@/lib/utils';
import { BadgeCheck, BadgeMinus, Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

import { TimeTrackType } from '@/lib/helper/time-track';
import { useTimeTrackEditMutation } from '@/store/features/time-track/track/api';

const TimeTrackStatus = ({ track }: { track: TimeTrackType }) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const [statusToggle, { isLoading, isError, isSuccess, error, data = {} }] =
		useTimeTrackEditMutation();
	const statusHandler = () => {
		statusToggle({
			id: track.id,
			data: { status: track.status === 1 ? 0 : 1 },
		});
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success(
				`Project successfully ${
					data.status === 1 ? 'inactivated' : 'activated'
				}`,
			);
			setOpen(false);
			router.refresh();
		} else if (isError) {
			toast.error(getError(error));
		}
	}, [data.status, error, isError, isSuccess, router]);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				{track.status === 0 ? (
					<BadgeCheck
						className="cursor-pointer stroke-status-success transition-all active:scale-75"
						size={16}
					/>
				) : (
					<BadgeMinus
						className="cursor-pointer stroke-status-danger transition-all active:scale-75"
						size={16}
					/>
				)}
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>
						{track.status === 0 ? 'Active' : 'Inactive'} Time Track
					</DialogTitle>
				</DialogHeader>
				Do you want to {track.status === 0 ? 'active' : 'inactive'} the
				Time Track?
				<DialogFooter>
					<Button
						onClick={statusHandler}
						className={cn(
							'flex items-center gap-1',
							track.status === 0
								? 'bg-status-success'
								: 'bg-status-danger',
						)}
						disabled={isLoading}
					>
						{isLoading ? (
							<Loader className="animate-spin" size={16} />
						) : null}
						{track.status === 0 ? 'Active' : 'Inactive'}
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default TimeTrackStatus;
