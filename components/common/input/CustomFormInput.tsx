import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import FormRadio from './Radio';
import FormSelect from './Select';
import FormTextEditor from './TextEditor';

type FormInputType = {
	label: string;
	placeholder?: string;
	name: string;
	type: string;
	optionUrl?: string;
	options?: { value: string; id: string; label: string }[];
	description: string;
	required?: boolean;
};

const CustomFormInput = ({
	input,
	control,
	extraClassName = '',
}: {
	input: FormInputType;
	control: any;
	extraClassName?: string;
}) => {
	const { label, name, type, placeholder = '', description } = input;

	const getTypes = (type: string, field: any) => {
		return type === 'editor' ? (
			<FormTextEditor field={field} />
		) : type === 'radio' ? (
			<FormRadio
				input={input}
				field={field}
			/>
		) : type === 'select' ? (
			<FormSelect
				input={input}
				field={field}
			/>
		) : (
			<Input
				type={type}
				placeholder={placeholder}
				{...field}
			/>
		);
	};

	return (
		<FormField
			key={name}
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={extraClassName}>
					<FormLabel>{label}</FormLabel>
					<FormControl>{getTypes(type, field)}</FormControl>
					{description && <FormDescription>{description}</FormDescription>}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default CustomFormInput;
