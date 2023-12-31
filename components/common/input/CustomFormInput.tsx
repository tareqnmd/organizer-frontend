import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

type FormInputType = {
	label: string;
	placeholder?: string;
	name: string;
	type: string;
	description: string;
	rules: { required: boolean; message: string }[];
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

	return (
		<FormField
			key={name}
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={extraClassName}>
					<FormLabel>{label}</FormLabel>
					<FormControl>
						<Input
							type={type}
							placeholder={placeholder}
							{...field}
						/>
					</FormControl>
					{description && <FormDescription>{description}</FormDescription>}
					<FormMessage />
				</FormItem>
			)}
		/>
	);
};

export default CustomFormInput;
