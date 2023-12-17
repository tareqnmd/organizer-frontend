'use client';
import FormInput from '@/components/common/input/FormInput';
import { note_form_items } from '@/lib/form-items';
import { Button, Form } from 'antd';

type NoteInput = {
	subject: string;
	details: string;
};

const onFinish = (values: NoteInput) => {
	console.log('values', values);
};

const NoteForm = () => {
	return (
		<Form
			name="note-create"
			onFinish={onFinish}
			layout="vertical"
		>
			{note_form_items.map((input) => (
				<FormInput
					key={input.name}
					input={input}
				/>
			))}
			<Button htmlType="submit">Submit</Button>
		</Form>
	);
};

export default NoteForm;
