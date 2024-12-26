import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Input } from '@/components/ui/input';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { DateTimeType } from '@/lib/helper/shared';
import { baseDateTimeFormat, baseInputDateFormat, cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

const FormDateTime = ({ field }: { field: ControllerRenderProps }) => {
	const [popUp, setPopUp] = useState(false);
	const [dateTime, setDateTime] = useState<DateTimeType>({
		date: '',
		time: {
			hour: '',
			minute: '',
			second: '',
		},
	});

	const dateChange = (value: Date | string) => {
		setDateTime((prev: DateTimeType) => ({
			...prev,
			date: baseInputDateFormat(value) || '',
		}));
	};

	const timeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setDateTime((prev: DateTimeType) => ({
			...prev,
			time: {
				...prev.time,
				[e.target.name]: e.target.value,
			},
		}));
	};

	const dateTimeSet = () => {
		const newDate = new Date(dateTime.date);
		newDate.setHours(Number(dateTime.time.hour));
		newDate.setMinutes(Number(dateTime.time.minute));
		newDate.setSeconds(Number(dateTime.time.second));
		if (newDate) {
			field.onChange(newDate);
			setPopUp(false);
		}
	};

	useEffect(() => {
		const date = field?.value ? new Date(field.value) : new Date();
		const dateFormat = {
			date: baseInputDateFormat(date) ?? '',
			time: {
				hour: date.getHours().toString(),
				minute: date.getMinutes().toString(),
				second: date.getSeconds().toString(),
			},
		};
		setDateTime(dateFormat);
	}, [field?.value]);

	return (
		<Popover onOpenChange={setPopUp} open={popUp}>
			<PopoverTrigger className="w-full">
				<Button
					onClick={() => setPopUp(true)}
					variant={'outline'}
					type="button"
					className={cn(
						'w-full font-normal',
						!field.value && 'text-slate-500',
					)}
				>
					{field.value ? (
						baseDateTimeFormat(field.value)
					) : (
						<span>Pick a date</span>
					)}
					<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<div className="relative z-50 flex flex-col items-center gap-4">
					<Calendar
						mode="single"
						selected={new Date(field?.value ?? '')}
						onSelect={(value) => dateChange(value ?? '')}
						disabled={(date) =>
							date > new Date() || date < new Date('1900-01-01')
						}
						initialFocus
					/>
					<div className="w-[80%]">
						<h3 className="mb-2 text-sm font-medium">Set Time</h3>
						<div className="flex items-center justify-between gap-2">
							<Input
								type="number"
								name="hour"
								placeholder="HH"
								className="w-[60px] text-center"
								value={dateTime.time.hour}
								min={0}
								max={23}
								onChange={timeChange}
							/>
							<Input
								type="number"
								name="minute"
								placeholder="MM"
								className="w-[60px] text-center"
								value={dateTime.time.minute}
								min={0}
								max={59}
								onChange={timeChange}
							/>
							<Input
								type="number"
								name="second"
								placeholder="SS"
								className="w-[60px] text-center"
								value={dateTime.time.second}
								min={0}
								max={59}
								onChange={timeChange}
							/>
						</div>
					</div>
					<Button
						onClick={dateTimeSet}
						className="m-auto mb-4 w-[80%]"
					>
						Set
					</Button>
				</div>
			</PopoverContent>
		</Popover>
	);
};

export default FormDateTime;
