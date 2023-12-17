import { OnChangeHandler } from '@/lib/common-types';
type TextEditorInput = { value: string; onChange: OnChangeHandler };

const TextEditor = ({ input }: { input: TextEditorInput }) => {
	const ReactQuill =
		typeof window === 'object' ? require('react-quill') : () => false;
	const { value, onChange } = input;
	const quillEditorOptions = [
		[{ header: [] }],
		[{ font: [] }, { color: [] }, { background: [] }],
		['bold', 'italic', 'underline', 'strike'],
		['blockquote', 'code-block'],
		[{ script: 'sub' }, { script: 'super' }],
		[
			{ list: 'ordered' },
			{ list: 'bullet' },
			{ indent: '-1' },
			{ indent: '+1' },
		],
		[{ align: [] }, { direction: 'rtl' }],
		['link', 'image', 'video', 'formula'],
		['clean'],
	];
	return (
		<ReactQuill
			modules={{ toolbar: quillEditorOptions }}
			value={value}
			onChange={onChange}
		/>
	);
};

export default TextEditor;
