'use client';

import { endOfMonth, format, startOfMonth } from 'date-fns';
import { DateRange } from 'react-day-picker';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { cn, stringToNewDate } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

const PRESETS: {
	name: string;
	label: string;
}[] = [
	{ name: 'today', label: 'Today' },
	{ name: 'yesterday', label: 'Yesterday' },
	{ name: 'last7', label: 'Last 7 days' },
	{ name: 'lastWeek', label: 'Last Week' },
	{ name: 'thisWeek', label: 'This Week' },
	{ name: 'last14', label: 'Last 14 days' },
	{ name: 'last30', label: 'Last 30 days' },
	{ name: 'thisMonth', label: 'This Month' },
	{ name: 'lastMonth', label: 'Last Month' },
	{
		name: 'thisYear',
		label: 'This Year',
	},
	{
		name: 'lastYear',
		label: 'Last Year',
	},
];

const FormDateRange = ({
	className,
	triggerClassName = '',
	initialValues,
	onUpdate,
}: {
	className: string;
	triggerClassName: string;
	initialValues?: { from?: string | null; to?: string | null };
	onUpdate: (values: { from: Date; to: Date }) => void;
}) => {
	const [open, setOpen] = useState(false);
	const [date, setDate] = useState<DateRange | undefined>({
		from: startOfMonth(new Date()),
		to: endOfMonth(new Date()),
	});

	const getPresetRange = (presetName: string) => {
		const preset = PRESETS.find(({ name }) => name === presetName);
		if (!preset)
			throw new Error(`Unknown date range preset: ${presetName}`);
		const from = new Date();
		const to = new Date();
		const first = from.getDate() - from.getDay();

		switch (preset.name) {
			case 'today':
				from.setHours(0, 0, 0, 0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'yesterday':
				from.setDate(from.getDate() - 1);
				from.setHours(0, 0, 0, 0);
				to.setDate(to.getDate() - 1);
				to.setHours(23, 59, 59, 999);
				break;
			case 'last7':
				from.setDate(from.getDate() - 6);
				from.setHours(0, 0, 0, 0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'last14':
				from.setDate(from.getDate() - 13);
				from.setHours(0, 0, 0, 0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'last30':
				from.setDate(from.getDate() - 29);
				from.setHours(0, 0, 0, 0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'thisWeek':
				from.setDate(first);
				from.setHours(0, 0, 0, 0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'lastWeek':
				from.setDate(from.getDate() - 7 - from.getDay());
				to.setDate(to.getDate() - to.getDay() - 1);
				from.setHours(0, 0, 0, 0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'thisMonth':
				from.setDate(1);
				from.setHours(0, 0, 0, 0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'lastMonth':
				from.setMonth(from.getMonth() - 1);
				from.setDate(1);
				from.setHours(0, 0, 0, 0);
				to.setDate(0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'thisYear':
				from.setMonth(0, 1);
				from.setHours(0, 0, 0, 0);
				to.setHours(23, 59, 59, 999);
				break;
			case 'lastYear':
				from.setFullYear(from.getFullYear() - 1);
				from.setMonth(0, 1);
				from.setHours(0, 0, 0, 0);
				to.setFullYear(from.getFullYear());
				to.setMonth(11, 31);
				to.setHours(23, 59, 59, 999);
				break;
		}
		setDate({ from, to });
	};

	const submitRange = () => {
		if (date?.from && date?.to) {
			onUpdate &&
				onUpdate({ from: new Date(date.from), to: new Date(date.to) });
		}
		closeDateRange();
	};

	const closeDateRange = () => {
		setOpen(false);
	};

	useEffect(() => {
		if (initialValues?.from && initialValues?.to) {
			setDate({
				from: stringToNewDate(initialValues.from),
				to: stringToNewDate(initialValues.to),
			});
		}
	}, [initialValues?.from, initialValues?.to]);

	return (
		<div className={cn('grid gap-2', className)}>
			<Popover open={open} onOpenChange={setOpen}>
				<PopoverTrigger asChild>
					<Button
						id="date"
						variant={'outline'}
						className={cn(
							'justify-start text-left font-normal',
							!date && 'text-muted-foreground',
							triggerClassName,
						)}
					>
						<CalendarIcon className="mr-2 h-4 w-4" />
						{date?.from ? (
							date.to ? (
								<>
									{format(date.from, 'LLL dd, y')} -{' '}
									{format(date.to, 'LLL dd, y')}
								</>
							) : (
								format(date.from, 'LLL dd, y')
							)
						) : (
							<span>Pick a date</span>
						)}
					</Button>
				</PopoverTrigger>
				<PopoverContent
					className="mr-[16px] w-[280px] max-w-screen-sm overflow-auto p-0 max-sm:max-h-[380px] sm:w-[90vw]"
					align="start"
				>
					<div className="flex flex-col gap-2">
						<Calendar
							initialFocus
							mode="range"
							defaultMonth={date?.from}
							selected={date}
							onSelect={setDate}
							numberOfMonths={2}
							className="[&>div]:justify-around"
							modifiersClassNames={{
								range_start:
									'!rounded-0 !bg-background-dark !text-light dark:!bg-background-light dark:!text-dark',
								range_end:
									'!rounded-0 !bg-background-dark !text-light dark:!bg-background-light dark:!text-dark',
							}}
						/>
						<div className="flex flex-wrap gap-2 p-4">
							{PRESETS.map((preset) => (
								<Button
									size={'sm'}
									className="max-sm:h-auto max-sm:px-3 max-sm:py-1 max-sm:text-xs"
									key={preset.name}
									onClick={() => getPresetRange(preset.name)}
								>
									{preset.label}
								</Button>
							))}
						</div>
					</div>
					<div className="sticky bottom-0 flex justify-end gap-2 border-t bg-background-light px-4 py-3 dark:bg-background-dark">
						<Button
							className="max-sm:w-full"
							onClick={closeDateRange}
							size={'sm'}
						>
							Close
						</Button>
						<Button
							className="max-sm:w-full"
							onClick={submitRange}
							size={'sm'}
						>
							Update
						</Button>
					</div>
				</PopoverContent>
			</Popover>
		</div>
	);
};
export default FormDateRange;
