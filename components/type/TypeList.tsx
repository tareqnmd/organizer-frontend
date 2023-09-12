'use client';
import { typeTableColumns } from '@/utils/helpers/type-helper';
import { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import Table from '../ui/table/Table';
import TypeDelete from './delete/TypeDelete';
import TypeForm from './form/TypeForm';
import TypeStatus from './status/TypeStatus';
import TypeButton from './button/TypeButton';

const TypeList = ({ types }: any) => {
	const [modalType, setModalType] = useState('');
	const [typeId, setTypeId] = useState(null);

	const typeAction = (type: string, item: any) => {
		setModalType(type);
		setTypeId(item?._id);
	};

	return (
		<>
			<TypeForm
				modalType={modalType}
				setModalType={setModalType}
				typeId={typeId}
			/>
			<TypeDelete
				modalType={modalType}
				setModalType={setModalType}
				typeId={typeId}
			/>
			<TypeStatus
				modalType={modalType}
				setModalType={setModalType}
				typeId={typeId}
			/>
			<TypeButton />
			<Table
				columns={typeTableColumns}
				data={types}
				actions={[
					{
						type: 'form',
						icon: <AiFillEdit />,
						clickHandler: typeAction,
					},
					{
						type: 'delete',
						icon: <AiFillDelete />,
						clickHandler: typeAction,
					},
					{
						type: 'status',
						icon: <BsFillEyeFill />,
						clickHandler: typeAction,
					},
				]}
			/>
		</>
	);
};

export default TypeList;
