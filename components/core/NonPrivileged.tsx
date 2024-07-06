import Link from 'next/link';

const NonPrivileged = () => {
	return (
		<div className="grid place-content-center h-full">
			<div className="text-center">
				<h2>You are not admin!!</h2>
				<Link
					className="text-blue-500 underline"
					href="/"
				>
					Home
				</Link>
			</div>
		</div>
	);
};

export default NonPrivileged;
