import { quillEditorOptions } from '@/utils/helpers/ui';
import { Controller } from 'react-hook-form';

const TextEditor = ({ input, control }: any) => {
	const ReactQuill =
		typeof window === 'object' ? require('react-quill') : () => false;
	const { name } = input;
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }: any) => (
				<ReactQuill
					{...field}
					modules={{ toolbar: quillEditorOptions }}
					value={field.value}
					onChange={field.onChange}
				/>
			)}
		/>
	);
};

export default TextEditor;
