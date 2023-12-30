'use client';
import { login_form_items } from '@/lib/form-items';
import { Button, Form, message } from 'antd';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import FormInput from '../common/input/FormInput';

type LoginInputs = {
	email: string;
	password: string;
};

const LoginForm = () => {
	const [messageApi, contextHolder] = message.useMessage();
	const router = useRouter();
	const onFinish = async (values: LoginInputs) => {
		const data = await signIn('credentials', { ...values });
		messageApi.open({
			type: data?.error ? 'error' : 'success',
			content: data?.error ? 'Error Found' : 'Successfully Logged In',
		});
		if (data?.status === 200) {
			router.push('/');
		}
	};

	return (
		<Form
			name="login"
			onFinish={onFinish}
			layout="vertical"
			className="min-w-[300px] mb-4 grid gap-2"
		>
			{contextHolder}
			{login_form_items.map((input) => (
				<FormInput
					key={input.name}
					input={input}
					extraClassName="m-0"
				/>
			))}
			<Button
				className="w-full mt-3"
				htmlType="submit"
			>
				Login
			</Button>
		</Form>
	);
};

export default LoginForm;
