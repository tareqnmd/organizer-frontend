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
import { useTimeTrackEditMutation } from '@/store/features/time-track/track/api';
import { CircleStop, Loader } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { toast } from 'sonner';

const TimeTrackStopButton = ({ trackId }: { trackId: string }) => {
	const [open, setOpen] = useState(false);
	const router = useRouter();
	const [trackEnd, { isLoading, isError, isSuccess, error, data = {} }] =
		useTimeTrackEditMutation();

	const trackEndHandler = () => {
		trackEnd({
			id: trackId,
			data: { isActive: false },
		});
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success(`Time Track successfully Ended`);
			setOpen(false);
			router.refresh();
		} else if (isError) {
			toast.error(getError(error));
		}
	}, [data.status, error, isError, isSuccess, router]);
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button variant="destructive" size="sm" className="h-auto p-1">
					<CircleStop className="h-3 w-3" />
				</Button>
			</DialogTrigger>
			<DialogContent className="basic-modal">
				<DialogHeader>
					<DialogTitle>
						Do you want to End the Time Track?
					</DialogTitle>
				</DialogHeader>
				<DialogFooter>
					<Button
						onClick={trackEndHandler}
						className={cn('flex items-center gap-1', 'bg-red-900')}
						disabled={isLoading}
					>
						{isLoading ? (
							<Loader className="animate-spin" size={16} />
						) : null}
						End Time Track
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
};

export default TimeTrackStopButton;
