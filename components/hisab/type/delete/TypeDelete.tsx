import Modal from '@/components/ui/modal/Modal';
import ModalFooterButtons from '@/components/ui/modal/ModalFooterButtons';
import {
	useDeleteTypeMutation,
	useGetTypeQuery,
} from '@/features/hisab/type/api';
import { getError } from '@/utils/helpers';
import { useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { toast } from 'react-toastify';
import TypeDetail from '../TypeDetail';

const TypeDelete = ({ modalType, setModalType, typeId }: any) => {
	const { data: type, isFetching } = useGetTypeQuery(typeId, {
		skip: !typeId,
	});

	const [deleteType, { isSuccess, isLoading, isError, error }] =
		useDeleteTypeMutation();

	const deleteTransactionHandler = () => {
		deleteType(typeId);
	};

	useEffect(() => {
		if (isSuccess) {
			toast.success('Successfully Deleted', {
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
			title="Delete Type"
			open={modalType === 'delete'}
			onCancel={() => {
				setModalType('');
			}}
			footer={
				<ModalFooterButtons>
					<button
						disabled={isLoading}
						onClick={deleteTransactionHandler}
						className="!bg-[red]"
					>
						<AiFillDelete /> Delete
					</button>
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

export default TypeDelete;
