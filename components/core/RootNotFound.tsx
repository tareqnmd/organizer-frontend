import { Home } from 'lucide-react';
import Link from 'next/link';

const RootNotFound = () => {
	return (
		<div className="grid h-screen place-items-center">
			<div className="text-center">
				<h2>Not Found</h2>
				<Link className="flex items-center gap-1 underline" href="/">
					<Home size={18} className="inline-block" /> Return Home
				</Link>
			</div>
		</div>
	);
};

export default RootNotFound;
