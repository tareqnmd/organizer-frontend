import Link from 'next/link';

const Unauthorized = () => {
	return (
		<div className="grid place-content-center h-full">
			<div className="text-center">
				<h2>Unauthorized</h2>
				<Link href="/">Home</Link>
			</div>
		</div>
	);
};

export default Unauthorized;
