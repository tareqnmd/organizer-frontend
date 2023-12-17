import { OnChangeHandler } from '@/lib/common-types';

const TextEditor = ({
	value,
	onChange,
}: {
	value?: string;
	onChange?: OnChangeHandler;
}) => {
	const ReactQuill =
		typeof window === 'object' ? require('react-quill') : () => false;
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
