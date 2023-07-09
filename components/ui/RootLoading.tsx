import { AiOutlineLoading3Quarters } from 'react-icons/ai';
const RootLoading = () => {
	return (
		<main className="bg-global">
			<div className="h-screen grid place-items-center  text-white">
				<AiOutlineLoading3Quarters className="animate-spin" />
			</div>
		</main>
	);
};

export default RootLoading;
