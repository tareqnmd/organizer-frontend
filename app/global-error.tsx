'use client';

import Error from '@/components/core/GlobalError';

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return <Error error={error} reset={reset} />;
}
