import { RefreshCcw } from 'lucide-react';

const GlobalError = ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) => {
	return (
		<html>
			<body className="grid h-screen place-content-center">
				<div className="text-center">
					<h2>{error?.message ?? 'Error Found'}</h2>
					<button className="underline" onClick={() => reset()}>
						<RefreshCcw className="inline-block" /> Try again
					</button>
				</div>
			</body>
		</html>
	);
};

export default GlobalError;
