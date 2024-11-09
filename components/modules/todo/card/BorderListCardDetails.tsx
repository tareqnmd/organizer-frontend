import CustomFormInput from '@/components/common/input/CustomFormInput';
import { Button } from '@/components/ui/button';
import { DialogFooter } from '@/components/ui/dialog';
import { Form } from '@/components/ui/form';
import { FormInputType } from '@/lib/helper/shared/enum';
import { CardType } from '@/lib/helper/todo';
import { useForm } from 'react-hook-form';

const BorderListCardDetails = ({ card }: { card: CardType }) => {
	const form = useForm({
		defaultValues: {
			description: card?.description ?? '',
		},
	});
	return (
		<Form {...form}>
			<CustomFormInput
				input={{
					type: FormInputType.EDITOR,
					name: 'description',
				}}
				control={form.control}
			/>
			<DialogFooter>
				<Button>Update</Button>
			</DialogFooter>
		</Form>
	);
};

export default BorderListCardDetails;
