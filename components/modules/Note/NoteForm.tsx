'use client';
import FormInput from '@/components/common/input/CustomFormInput';
import { getError } from '@/lib/common-func';
import { note_form_items } from '@/lib/form-items';
import { useCreateNoteMutation } from '@/store/features/note/api';
import { Button, Form, message } from 'antd';
import { useEffect } from 'react';

type NoteInput = {
	subject: string;
	details: string;
};

const NoteForm = () => {
	const [createNote, { isLoading, isError, isSuccess, error }] =
		useCreateNoteMutation();
	const [messageApi, contextHolder] = message.useMessage();
	const onFinish = (values: NoteInput) => {
		createNote(values);
	};

	useEffect(() => {
		if (isError || isSuccess) {
			messageApi.open({
				type: isError ? 'error' : isSuccess ? 'success' : 'loading',
				content: isError
					? getError(error)
					: isSuccess
					? 'Note successfully created'
					: 'Creating Note',
			});
		}
	}, [isError, isSuccess, error, messageApi]);
	return (
		<Form
			name="note-create"
			onFinish={onFinish}
			layout="vertical"
		>
			{contextHolder}
			{note_form_items.map((input) => (
				<FormInput
					key={input.name}
					input={input}
				/>
			))}
			<Button
				disabled={isLoading}
				htmlType="submit"
			>
				Submit
			</Button>
		</Form>
	);
};

export default NoteForm;
