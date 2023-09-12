import Modal from '@/components/modal/Modal';
import Button from '@/components/shared/button/Button';
import FormInput from '@/components/shared/input/FormItem';
import Loading from '@/components/ui/loader/Loading';
import {
	useAddTypeMutation,
	useEditTypeMutation,
	useGetTypeQuery,
} from '@/features/type/type-api';
import { getError } from '@/utils/helpers';
import { typeFormInputs } from '@/utils/helpers/type-helper';
import { yupResolver } from '@hookform/resolvers/yup';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const schema = yup
	.object({
		name: yup.string().required(),
		type: yup.string().required(),
	})
	.required();
const TypeForm = ({ typeId, modalType, setModalType }: any) => {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<any>({
		resolver: yupResolver(schema),
	});

	const { data: type, isFetching } = useGetTypeQuery(typeId, {
		skip: !typeId,
	});

	const [
		addType,
		{
			isLoading: addIsLoading,
			isSuccess: addIsSuccess,
			isError: addIsError,
			error: addError,
		},
	] = useAddTypeMutation();
	const [
		editType,
		{
			isLoading: editIsLoading,
			isSuccess: editIsSuccess,
			isError: editIsError,
			error: editError,
		},
	] = useEditTypeMutation();

	const transactionMutation = (data: any) => {
		typeId ? editType({ id: typeId, data: data }) : addType(data);
	};

	const getColumnWidth = (name: string) => {
		if (['description', 'typeId'].includes(name)) {
			return 'col-span-2';
		}
		return 'col-span-2 md:col-span-1';
	};

	useEffect(() => {
		if (type?._id) {
			setValue('name', type.name);
			setValue('type', type.type);
		}
	}, [setValue, type]);

	useEffect(() => {
		if (addIsSuccess) {
			toast.success('Successfully Added', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
			setModalType('');
			reset();
		}
		if (addIsError) {
			toast.error(getError(addError), { position: 'top-center' });
		}
	}, [addIsSuccess, addIsError, addError, reset, setModalType]);

	useEffect(() => {
		if (editIsSuccess) {
			toast.success('Successfully Updated', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
			setModalType('');
			reset();
		}
		if (editIsError) {
			toast.error(getError(editError), { position: 'top-center' });
		}
	}, [editIsSuccess, editIsError, editError, reset, setModalType]);
	return (
		<Modal
			title={`${typeId ? 'Update' : 'Create'} Type`}
			open={modalType === 'form'}
			onCancel={() => setModalType('')}
		>
			<Loading loading={isFetching}>
				<form
					className="p-3 bg-[#0b2447] rounded-md shadow-md"
					onSubmit={handleSubmit(transactionMutation)}
				>
					<div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
						{typeFormInputs?.map((input) => (
							<FormInput
								key={input?.name}
								input={input}
								register={register}
								errors={errors}
								extraClass={`${getColumnWidth(
									input.name
								)} input-label-white`}
							/>
						))}
					</div>
					<div className="flex justify-end mt-4">
						<Button
							type="submit"
							name={`${typeId ? 'Update' : 'Create'} Type`}
							loading={addIsLoading || editIsLoading}
							mutation={true}
							extraClassNames={`!bg-white !text-black font-semibold`}
						/>
					</div>
				</form>
			</Loading>
		</Modal>
	);
};

export default TypeForm;
