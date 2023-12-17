'use client';
import { Form, Input } from 'antd';

const onFinish = () => {};

type FieldType = {
	subject?: string;
	details?: string;
};

const NoteForm = () => {
	return (
		<Form
			name="basic"
			onFinish={onFinish}
			layout="vertical"
		>
			<Form.Item<FieldType>
				label="Subject"
				name="subject"
				rules={[{ required: true, message: 'Please input note subject!' }]}
			>
				<Input />
			</Form.Item>
			<Form.Item<FieldType>
				label="Details"
				name="details"
				rules={[{ required: true, message: 'Please input note details!' }]}
			>
				<Input.TextArea />
			</Form.Item>
		</Form>
	);
};

export default NoteForm;
