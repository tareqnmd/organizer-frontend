const ModuleError = ({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) => {
	return (
		<div className="grid h-full place-content-center">
			<div className="text-center">
				<h2>{error?.message ?? 'Error Found'}</h2>
				<button onClick={() => reset()}>Try again</button>
			</div>
		</div>
	);
};

export default ModuleError;
