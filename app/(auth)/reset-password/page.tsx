import ResetPassword from '@/components/auth/ResetPassword';

const ResetPasswordPage = ({
	searchParams,
}: {
	searchParams: { token: string; id: string };
}) => {
	return <ResetPassword searchParams={searchParams} />;
};

export default ResetPasswordPage;
