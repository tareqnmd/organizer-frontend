import ReactQuill from 'react-quill';

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
const FormTextEditor = ({ field }: any) => {
	return (
		<ReactQuill
			{...field}
			modules={{ toolbar: quillEditorOptions }}
		/>
	);
};

export default FormTextEditor;
