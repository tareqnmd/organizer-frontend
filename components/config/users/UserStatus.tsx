import Modal from '@/components/ui/modal/Modal';
import ModalFooterButtons from '@/components/ui/modal/ModalFooterButtons';
import {
	useGetUserQuery,
	useUserStatusUpdateMutation,
} from '@/features/user/api';
import { getError } from '@/utils/helpers';
import { useEffect } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import UserDetail from './UserDetail';

const UserStatus = ({ modalType, setModalType, userId }: any) => {
	const { data: user, isFetching } = useGetUserQuery(userId, {
		skip: !userId,
	});

	const [statusUpdate, { isSuccess, isLoading, isError, error }] =
		useUserStatusUpdateMutation();

	const inactiveStatus = () => {
		statusUpdate({ id: userId, data: { status: 0 } });
	};

	const activeStatus = () => {
		statusUpdate({ id: userId, data: { status: 1 } });
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Status Updated', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
			setModalType('');
		}
		if (isError) {
			toast.error(getError(error), { position: 'top-center' });
		}
	}, [isSuccess, isError, error, setModalType]);

	return (
		<Modal
			title="User Status"
			open={modalType === 'status'}
			onCancel={() => {
				setModalType('');
			}}
			footer={
				<ModalFooterButtons>
					{user?.status === 1 && (
						<button
							disabled={isLoading}
							onClick={inactiveStatus}
							className="!bg-[red]"
						>
							<AiFillCloseCircle /> Inactive
						</button>
					)}
					{user?.status === 0 && (
						<button
							disabled={isLoading}
							onClick={activeStatus}
							className="ml-2 !bg-[green]"
						>
							<AiFillCheckCircle /> Active
						</button>
					)}
				</ModalFooterButtons>
			}
		>
			<UserDetail
				user={user}
				isFetching={isFetching}
			/>
		</Modal>
	);
};

export default UserStatus;
