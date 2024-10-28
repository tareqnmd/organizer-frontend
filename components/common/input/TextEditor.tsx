import { quillEditorOptions } from '@/lib/helper/shared/config';
import { ControllerRenderProps } from 'react-hook-form';
import ReactQuill from 'react-quill';

const FormTextEditor = ({ field }: { field: ControllerRenderProps }) => {
	return <ReactQuill {...field} modules={{ toolbar: quillEditorOptions }} />;
};

export default FormTextEditor;
