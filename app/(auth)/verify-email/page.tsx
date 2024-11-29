import VerifyEmail from '@/components/auth/VerifyEmail';

const VerifyEmailPage = ({
	searchParams,
}: {
	searchParams: { token: string; id: string };
}) => {
	return <VerifyEmail searchParams={searchParams} />;
};

export default VerifyEmailPage;
