import Logo from './Logo';

const BaseLoading = () => {
	return (
		<div className="grid h-full place-items-center">
			<Logo className="animate-pulse duration-1000" />
		</div>
	);
};

export default BaseLoading;
