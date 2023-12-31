import { CheckCircle } from 'lucide-react';

const SuccessMessage = ({ message = 'Success' }: { message?: string }) => {
	return (
		<>
			<CheckCircle />
			{message}
		</>
	);
};

export default SuccessMessage;
