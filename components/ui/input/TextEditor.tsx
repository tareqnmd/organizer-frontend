import { Controller } from 'react-hook-form';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ input, control }: any) => {
	const { name } = input;
	return (
		<Controller
			control={control}
			name={name}
			render={({ field }: any) => (
				<ReactQuill
					{...field}
					value={field.value}
					onChange={field.onChange}
				/>
			)}
		/>
	);
};

export default TextEditor;
