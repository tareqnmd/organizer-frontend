import Link from 'next/link';

const NonPrivileged = () => {
	return (
		<div className="grid h-full place-content-center">
			<div className="text-center">
				<h2>You are not admin!!</h2>
				<Link className="text-blue-500 underline" href="/">
					Home
				</Link>
			</div>
		</div>
	);
};

export default NonPrivileged;
