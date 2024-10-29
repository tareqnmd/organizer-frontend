import Link from 'next/link';

const RootNotFound = () => {
	return (
		<div className="grid h-screen place-items-center">
			<div className="text-center">
				<h2>Not Found</h2>
				<Link href="/">Return Home</Link>
			</div>
		</div>
	);
};

export default RootNotFound;
