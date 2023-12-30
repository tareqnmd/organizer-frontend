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
			<div className="grid grid-cols-2 gap-2 mt-2">
				<Button
					onClick={() =>
						signIn('google', {
							callbackUrl: `${window.location.origin}`,
						})
					}
				>
					Google
				</Button>
				<Button
					onClick={() =>
						signIn('github', {
							callbackUrl: `${window.location.origin}`,
						})
					}
				>Github
				</Button>
			</div>
		</Form>
	);
};

export default LoginForm;
