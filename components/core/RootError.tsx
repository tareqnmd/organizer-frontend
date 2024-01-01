const RootError = ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) => {
	return (
		<div className="grid place-content-center h-screen">
			<div className="text-center">
				<h2>{error?.message ?? 'Error Found'}</h2>
				<button
					className="underline"
					onClick={() => reset()}
				>
					Try again
				</button>
			</div>
		</div>
	);
};

export default RootError;
