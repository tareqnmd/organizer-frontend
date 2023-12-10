'use client';

import Error from '@/components/core/Error';

const ErrorArea = ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) => {
	return (
		<Error
			error={error}
			reset={reset}
		/>
	);
};

export default ErrorArea;
