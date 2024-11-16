import CustomFormInput from '@/components/common/input/CustomFormInput';
import { Form } from '@/components/ui/form';
import { useDebounce } from '@/hooks/useDebounce';
import { FormInputType } from '@/lib/helper/shared/enum';
import { CardSchemaType, CardType } from '@/lib/helper/todo';
import { CardSchema } from '@/lib/helper/todo/schemas';
import { useEditCardMutation } from '@/store/features/todo/card/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const BorderListCardDetails = ({ card }: { card: CardType }) => {
	const [editCard] = useEditCardMutation();
	const form = useForm<CardSchemaType>({
		resolver: zodResolver(CardSchema),
		defaultValues: {
			description: card?.description ?? '',
		},
	});
	const { watch } = form;

	const description = watch('description');
	const debouncedValue = useDebounce(description, 1000);

	useEffect(() => {
		if (!debouncedValue) return;
		editCard({
			data: { description: debouncedValue },
			id: card.id,
		});
	}, [debouncedValue, editCard, card.id]);

	return (
		<Form {...form}>
			<CustomFormInput
				input={{
					type: FormInputType.EDITOR,
					name: 'description',
				}}
				control={form.control}
			/>
		</Form>
	);
};

export default BorderListCardDetails;
