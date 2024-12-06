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
import { FormInputType } from '@/lib/helper/shared/enum';
import { cn } from '@/lib/utils';
import { ControllerRenderProps } from 'react-hook-form';
import CheckboxInput from './Checkbox';
import FormDate from './Date';
import FormRadio from './Radio';
import FormSelect from './Select';
import FormTextEditor from './TextEditor';

const CustomFormInput = ({
	input,
	control,
	extraClassName = '',
}: CustomFormInputPropsType) => {
	const {
		label,
		name,
		type,
		fieldRequired = false,
		placeholder = '',
		description,
	} = input;

	const getTypes = (type: FormInputType, field: ControllerRenderProps) => {
		return type === FormInputType.EDITOR ? (
			<FormTextEditor field={field} />
		) : type === FormInputType.RADIO ? (
			<FormRadio input={input} field={field} />
		) : type === FormInputType.SELECT ? (
			<FormSelect input={input} field={field} />
		) : type === FormInputType.DATE ? (
			<FormDate field={field} />
		) : type === FormInputType.TEXTAREA ? (
			<Textarea
				className={'basic-input'}
				placeholder={placeholder}
				{...field}
			/>
		) : type === FormInputType.CHECKBOX ? (
			<CheckboxInput input={input} field={field} />
		) : (
			<Input
				className={'basic-input'}
				placeholder={placeholder}
				{...{ ...input, ...field }}
			/>
		);
	};

	return (
		<FormField
			key={name}
			control={control}
			name={name}
			render={({ field }) => (
				<FormItem className={cn(extraClassName)}>
					<FormLabel>
						{label}
						{fieldRequired && (
							<span className="pl-0.5 text-status-danger">*</span>
						)}
					</FormLabel>
					<FormControl>
						{getTypes(type || FormInputType.TEXT, field)}
					</FormControl>
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
