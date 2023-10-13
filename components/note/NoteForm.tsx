'use client';
import Button from '@/components/ui/button/Button';
import FormInput from '@/components/ui/input/FormItem';
import Loading from '@/components/ui/loader/Loading';
import {
	useAddNoteMutation,
	useEditNoteMutation,
	useGetNoteQuery,
} from '@/features/note/api';
import { getUserState } from '@/features/user/slice';
import { PageHeader } from '@/styles/globalStyledComponent';
import { getError } from '@/utils/helpers';
import { noteFormInputs } from '@/utils/helpers/note';
import { yupResolver } from '@hookform/resolvers/yup';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import * as yup from 'yup';

const schema = yup
	.object({
		name: yup.string().required(),
		details: yup.string().required(),
	})
	.required();

const NoteForm = ({ noteId }: any) => {
	const {
		register,
		setValue,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm<any>({
		resolver: yupResolver(schema),
	});
	const router = useRouter();
	const { userId } = useSelector(getUserState);
	const { data: note, isFetching } = useGetNoteQuery(noteId, {
		skip: !noteId,
	});
	const [
		addNote,
		{
			isLoading: addIsLoading,
			isSuccess: addIsSuccess,
			isError: addIsError,
			error: addError,
		},
	] = useAddNoteMutation();
	const [
		editNote,
		{
			isLoading: editIsLoading,
			isSuccess: editIsSuccess,
			isError: editIsError,
			error: editError,
		},
	] = useEditNoteMutation();

	const noteMutation = (data: any) => {
		noteId
			? editNote({
					id: noteId,
					data: {
						...data,
						userId,
					},
			  })
			: addNote({
					...data,
					userId,
			  });
	};

	useEffect(() => {
		if (note?._id) {
			setValue('name', note.name);
			setValue('details', note.details);
		}
	}, [setValue, note]);

	useEffect(() => {
		if (addIsSuccess) {
			toast.success('Successfully Added', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
			reset();
			router.push('/note');
		}
		if (addIsError) {
			toast.error(getError(addError), { position: 'top-center' });
		}
	}, [addIsSuccess, addIsError, addError, router, reset]);

	useEffect(() => {
		if (editIsSuccess) {
			toast.success('Successfully Updated', {
				position: 'top-center',
				autoClose: 1000,
				hideProgressBar: true,
			});
			reset();
			router.push('/note');
		}
		if (editIsError) {
			toast.error(getError(editError), { position: 'top-center' });
		}
	}, [editIsSuccess, editIsError, editError, router, reset]);

	return (
		<>
			<PageHeader>Note {noteId ? 'Update' : 'Create'}:</PageHeader>
			<Loading loading={isFetching}>
				<form onSubmit={handleSubmit(noteMutation)}>
					<div className="grid gap-6">
						{noteFormInputs?.map((input) => (
							<FormInput
								key={input?.name}
								input={input}
								register={register}
								errors={errors}
							/>
						))}
					</div>
					<div className="flex justify-end mt-4">
						<Button
							type="submit"
							name={`${noteId ? 'Update' : 'Create'} Note`}
							loading={addIsLoading || editIsLoading}
							mutation={true}
						/>
					</div>
				</form>
			</Loading>
		</>
	);
};

export default NoteForm;
