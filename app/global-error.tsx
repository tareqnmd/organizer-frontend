'use client';

import GlobalError from '@/components/core/GlobalError';

export default function GlobalErrorArea({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<GlobalError
			error={error}
			reset={reset}
		/>
	);
}
