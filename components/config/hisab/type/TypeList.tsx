'use client';
import Table from '@/components/ui/table/Table';
import { typeTableColumns } from '@/utils/helpers/type-helper';
import { useState } from 'react';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import { BsFillEyeFill } from 'react-icons/bs';
import TypeButton from './button/TypeButton';
import TypeDelete from './delete/TypeDelete';
import TypeForm from './form/TypeForm';
import TypeStatus from './status/TypeStatus';

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
			<div className="flex items-end justify-between border-b-2 border-stone-950 mb-2 pb-2">
				<h3 className="font-semibold text-lg">Types</h3>
				<TypeButton />
			</div>
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
