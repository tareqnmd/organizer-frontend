'use client';
import TextEditor from '@/components/common/input/TextEditor';
import { Button, Form, Input } from 'antd';

type NoteInput = {
	subject: string;
	details: string;
};

const onFinish = (values: NoteInput) => {
	console.log('values', values);
};

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
				<TextEditor value={'lorem100'} />
			</Form.Item>
			<Button
				type="primary"
				htmlType="submit"
			>
				Submit
			</Button>
		</Form>
	);
};

export default NoteForm;
