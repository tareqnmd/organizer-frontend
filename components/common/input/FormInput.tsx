import { Form, Input } from 'antd';
import TextEditor from './TextEditor';

type FormInputType = {
	label: string;
	placeholder?: string;
	name: string;
	type: string;
	rules: { required: boolean; message: string }[];
};

const FormInput = ({ input }: { input: FormInputType }) => {
	const { label, name, rules, type, placeholder = '' } = input;

	const renderInputType = (type: string) => {
		switch (type) {
			case 'textarea':
				return <Input.TextArea placeholder={placeholder} />;
			case 'editor':
				return <TextEditor placeholder={placeholder} />;
			default:
				return <Input placeholder={placeholder} />;
		}
	};

	return (
		<Form.Item
			label={label}
			name={name}
			rules={rules}
		>
			{renderInputType(type)}
		</Form.Item>
	);
};

export default FormInput;
