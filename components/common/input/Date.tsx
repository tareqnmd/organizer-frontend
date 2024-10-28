import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

const FormDate = ({ field }: { field: ControllerRenderProps }) => {
	const [popUp, setPopUp] = useState(false);
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
						format(field.value, 'PPP')
					) : (
						<span>Pick a date</span>
					)}
					<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-auto p-0" align="start">
				<Calendar
					mode="single"
					selected={new Date(field?.value ?? '')}
					onSelect={(value) => {
						field.onChange(value);
						setPopUp(false);
					}}
					disabled={(date) =>
						date > new Date() || date < new Date('1900-01-01')
					}
				/>
			</PopoverContent>
		</Popover>
	);
};

export default FormDate;
