import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { CalendarIcon } from 'lucide-react';

const FormDate = ({field }: any) => {
	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant={'outline'}
					className={cn(
						'flex w-full text-left font-normal',
						!field.value && 'text-muted-foreground'
					)}
				>
					{field.value ? format(field.value, 'PPP') : <span>Pick a date</span>}
					<CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
				</Button>
			</PopoverTrigger>
			<PopoverContent
				className="w-auto p-0"
				align="start"
			>
				<Calendar
					mode="single"
					selected={field.value}
					onSelect={field.onChange}
					disabled={(date) =>
						date > new Date() || date < new Date('1900-01-01')
					}
					initialFocus
				/>
			</PopoverContent>
		</Popover>
	);
};

export default FormDate;
