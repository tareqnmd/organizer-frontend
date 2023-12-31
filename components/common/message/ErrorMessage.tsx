import { XCircle } from 'lucide-react';

const ErrorMessage = ({ message = 'Error' }: { message?: string }) => {
	return (
		<>
			<XCircle />
			{message}
		</>
	);
};

export default ErrorMessage;
