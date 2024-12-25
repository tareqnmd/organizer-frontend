'use client';

import CustomFormInput from '@/components/common/input/CustomFormInput';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
	timeTrackEditFormItems,
	TimeTrackEditSchema,
	TimeTrackEditSchemaType,
	TimeTrackType,
} from '@/lib/helper/time-track';
import { getError } from '@/lib/utils';
import { useTimeTrackEditMutation } from '@/store/features/time-track/track/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader, Timer } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const TimeTrackForm = ({
	setOpen,
	track,
}: {
	setOpen: (open: boolean) => void;
	track: TimeTrackType;
}) => {
	const router = useRouter();
	const form = useForm<TimeTrackEditSchemaType>({
		resolver: zodResolver(TimeTrackEditSchema),
	});
	const [
		update,
		{
			isLoading: isLoading,
			isError: isError,
			isSuccess: isSuccess,
			error: error,
		},
	] = useTimeTrackEditMutation();

	const onSubmit = async (values: TimeTrackEditSchemaType) => {
		await update(values);
	};
	useEffect(() => {
		if (isSuccess) {
			toast.success(`Time track successfully updated`);
			router.refresh();
		} else if (isError) {
			toast.error(getError(error));
		}
	}, [error, isError, isSuccess, router]);

	useEffect(() => {
		if (track?.startTime && track.endTime) {
			form.setValue('startTime', track.startTime);
			form.setValue('endTime', track.endTime);
		}
	}, [form, track]);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid w-full gap-3"
			>
				{timeTrackEditFormItems.map((input) => (
					<CustomFormInput
						key={input.name}
						input={input}
						control={form?.control}
					/>
				))}
				<Button
					disabled={isLoading}
					className="flex items-center gap-1"
					type="submit"
				>
					{isLoading ? (
						<Loader className="animate-spin" size={16} />
					) : (
						<Timer size={16} />
					)}
					Update Time Track
				</Button>
			</form>
		</Form>
	);
};

export default TimeTrackForm;
