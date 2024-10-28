import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CustomFormInputPropsType } from '@/lib/helper/shared';
import { cn } from '@/lib/utils';
import { ControllerRenderProps } from 'react-hook-form';
import FormDate from './Date';
import FormRadio from './Radio';
import FormSelect from './Select';
import FormTextEditor from './TextEditor';

const CustomFormInput = ({
	input,
	control,
	extraClassName = '',
}: CustomFormInputPropsType) => {
	const { label, name, type, placeholder = '', description } = input;

	const getTypes = (type: string, field: ControllerRenderProps) => {
		return type === 'editor' ? (
			<FormTextEditor field={field} />
		) : type === 'radio' ? (
			<FormRadio input={input} field={field} />
		) : type === 'select' ? (
			<FormSelect input={input} field={field} />
		) : type === 'date' ? (
			<FormDate field={field} />
		) : type === 'textarea' ? (
			<Textarea placeholder={placeholder} {...field} />
		) : (
			<Input placeholder={placeholder} {...{ ...input, ...field }} />
		);
	};

	return (
		<FormField
			key={name}
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={cn(extraClassName)}>
					<FormLabel>{label}</FormLabel>
					<FormControl>{getTypes(type, field)}</FormControl>
					{description && (
						<FormDescription>{description}</FormDescription>
					)}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default CustomFormInput;
