import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const TextEditor = ({ input, register }: any) => {
	const { name } = input;
	const [value, setValue] = useState('');

	return (
		<ReactQuill
			theme="snow"
			value={value}
			onChange={setValue}
		/>
	);
};

export default TextEditor;
