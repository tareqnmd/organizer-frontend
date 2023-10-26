import Modal from '@/components/ui/modal/Modal';
import ModalFooterButtons from '@/components/ui/modal/ModalFooterButtons';
import {
	useEditTypeMutation,
	useGetTypeQuery,
} from '@/features/hisab/type/api';
import { getError } from '@/utils/helpers';
import { useEffect } from 'react';
import { AiFillCheckCircle, AiFillCloseCircle } from 'react-icons/ai';
import { toast } from 'react-toastify';
import TypeDetail from '../TypeDetail';

const TypeStatus = ({ modalType, setModalType, typeId }: any) => {
	const { data: type, isFetching } = useGetTypeQuery(typeId, {
		skip: !typeId,
	});

	const [statusUpdate, { isSuccess, isLoading, isError, error }] =
		useEditTypeMutation();

	const inactiveStatus = () => {
		statusUpdate({ id: typeId, data: { status: 0 } });
	};

	const activeStatus = () => {
		statusUpdate({ id: typeId, data: { status: 1 } });
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
			title="Type Status"
			open={modalType === 'status'}
			onCancel={() => {
				setModalType('');
			}}
			footer={
				<ModalFooterButtons>
					{type?.status === 1 && (
						<button
							disabled={isLoading}
							onClick={inactiveStatus}
							className="!bg-[red]"
						>
							<AiFillCloseCircle /> Inactive
						</button>
					)}
					{type?.status === 0 && (
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
			<TypeDetail
				type={type}
				isFetching={isFetching}
			/>
		</Modal>
	);
};

export default TypeStatus;
