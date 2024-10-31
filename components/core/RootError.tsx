import { RefreshCcw } from 'lucide-react';

const RootError = ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) => {
	return (
		<div className="grid h-screen place-content-center">
			<div className="text-center">
				<h2>{error?.message ?? 'Error Found'}</h2>
				<button
					className="flex items-center gap-1 underline"
					onClick={() => reset()}
				>
					<RefreshCcw className="inline-block" /> Try again
				</button>
			</div>
		</div>
	);
};

export default RootError;
