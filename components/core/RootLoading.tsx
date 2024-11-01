import { Loader } from 'lucide-react';

const RootLoading = () => {
	return (
		<div className="grid h-screen place-items-center">
			<Loader className="animate-spin" />
		</div>
	);
};

export default RootLoading;
