import Link from 'next/link';

const NotFound = () => {
	return (
		<div className="grid place-items-center h-full">
			<div className="text-center">
				<h2>Not Found</h2>
				<Link href="/">Return Home</Link>
			</div>
		</div>
	);
};

export default NotFound;
