import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import ReactQuill from 'react-quill';
import FormSelect from './Select';

type FormInputType = {
	label: string;
	placeholder?: string;
	name: string;
	type: string;
	options?: { value: string; id: string; label: string }[];
	description: string;
};
const quillEditorOptions = [
	[{ header: [] }],
	[{ font: [] }, { color: [] }, { background: [] }],
	['bold', 'italic', 'underline', 'strike'],
	['blockquote', 'code-block'],
	[{ script: 'sub' }, { script: 'super' }],
	[{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
	[{ align: [] }, { direction: 'rtl' }],
	['link', 'image', 'video', 'formula'],
	['clean'],
];
const CustomFormInput = ({
	input,
	control,
	extraClassName = '',
}: {
	input: FormInputType;
	control: any;
	extraClassName?: string;
}) => {
	const { label, name, type, placeholder = '', options, description } = input;

	const getTypes = (type: string, field: any) => {
		return type === 'editor' ? (
			<ReactQuill
				{...field}
				modules={{ toolbar: quillEditorOptions }}
			/>
		) : type === 'radio' ? (
			<RadioGroup
				onValueChange={field.onChange}
				defaultValue={field.value}
				className="flex"
			>
				{options?.map((option) => (
					<div
						key={option.id}
						className="flex gap-1"
					>
						<RadioGroupItem
							id={option.id}
							value={option.value}
						/>
						<Label
							htmlFor={option.id}
							className="font-normal !m-0"
						>
							{option.label}
						</Label>
					</div>
				))}
			</RadioGroup>
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
