'use client';
import { useDeleteTypeMutation } from '@/features/hisab/type/type-api';
import { getError } from '@/utils/helpers';
import { useEffect } from 'react';
import { AiFillDelete } from 'react-icons/ai';
import { FaTimesCircle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Loading from '../ui/loader/Loading';
import Modal from '../ui/modal/Modal';
import { useDeleteNoteMutation } from '@/features/note/api';

const NoteDelete = ({ id, modalType, setModalType }: any) => {
	const [deleteNote, { isSuccess, isLoading, isError, error }] =
		useDeleteNoteMutation();

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
			setModalType('');
		}
	}, [isSuccess, isError, error, setModalType]);

	return (
		<>
			<Modal
				title="Delete Note"
				open={modalType}
				onCancel={() => setModalType(false)}
				width={'250px'}
			>
				<Loading loading={isLoading}>
					<div className="flex flex-col items-center m-3">
						<h3 className="text-2xl font-semibold">
							You Want to delete Note?
						</h3>
						<div className="flex gap-2 mt-2">
							<button
								className="flex items-center text-white gap-1 bg-[red] rounded px-3 py-2"
								onClick={() => deleteNote(id)}
							>
								<AiFillDelete />
								Delete
							</button>
							<button
								className="flex items-center text-white gap-1 bg-[black] rounded px-3 py-2"
								onClick={() => {
									setModalType(false);
								}}
							>
								<FaTimesCircle />
								Cancel
							</button>
						</div>
					</div>
				</Loading>
			</Modal>
		</>
	);
};

export default NoteDelete;
