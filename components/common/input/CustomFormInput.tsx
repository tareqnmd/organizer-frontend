import {
	FormControl,
	FormDescription,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import ReactQuill from 'react-quill';

type FormInputType = {
	label: string;
	placeholder?: string;
	name: string;
	type: string;
	description: string;
	rules: { required: boolean; message: string }[];
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
	const { label, name, type, placeholder = '', description } = input;

	const getTypes = (type: string, field: any) => {
		return type === 'editor' ? (
			<ReactQuill
				{...field}
				modules={{ toolbar: quillEditorOptions }}
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
