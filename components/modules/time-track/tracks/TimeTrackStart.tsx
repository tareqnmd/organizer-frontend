'use client';

import CustomFormInput from '@/components/common/input/CustomFormInput';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import {
	timeTrackStartFormItems,
	TimeTrackStartSchema,
	TimeTrackStartSchemaType,
} from '@/lib/helper/time-track';
import { getError } from '@/lib/utils';
import { useTimeTrackCreateMutation } from '@/store/features/time-track/track/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader, Timer } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

const TimeTrackStart = () => {
	const router = useRouter();
	const form = useForm<TimeTrackStartSchemaType>({
		resolver: zodResolver(TimeTrackStartSchema),
	});
	const [
		create,
		{
			isLoading: isCreateLoading,
			isError: isCreateError,
			isSuccess: isCreateSuccess,
			error: createError,
		},
	] = useTimeTrackCreateMutation();

	const onSubmit = async (values: TimeTrackStartSchemaType) => {
		await create(values);
	};
	useEffect(() => {
		if (isCreateSuccess) {
			toast.success(`Time track successfully started`);
			router.refresh();
		} else if (isCreateError) {
			toast.error(getError(createError));
		}
	}, [createError, isCreateError, isCreateSuccess, router]);

	return (
		<Form {...form}>
			<form
				onSubmit={form.handleSubmit(onSubmit)}
				className="grid w-full gap-3"
			>
				{timeTrackStartFormItems.map((input) => (
					<CustomFormInput
						key={input.name}
						input={input}
						control={form?.control}
					/>
				))}
				<Button
					disabled={isCreateLoading}
					className="flex items-center gap-1"
					type="submit"
				>
					{isCreateLoading ? (
						<Loader className="animate-spin" size={16} />
					) : (
						<Timer size={16} />
					)}
					Start Time Track
				</Button>
			</form>
		</Form>
	);
};

export default TimeTrackStart;
