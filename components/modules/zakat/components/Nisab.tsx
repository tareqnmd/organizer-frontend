import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ZakatCalculationType } from '../helper';
import ZakatCardWrapper from './ZakatCardWrapper';
const Nisab = ({
	updateFields,
}: {
	updateFields: (
		type: ZakatCalculationType,
		name: string,
		value: number,
	) => void;
}) => {
	return (
		<ZakatCardWrapper extraClass="max-lg:col-span-full" headerTitle="Nisab">
			<div className="flex flex-col gap-2">
				<Label className="text-sm font-medium">Nisab</Label>
				<Input
					type="number"
					min={0}
					name="nisab"
					className="text-right"
					placeholder="Enter Nisab"
					onChange={(e) =>
						updateFields(
							ZakatCalculationType.Nisab,
							'nisab',
							Number(e.target.value),
						)
					}
				/>
			</div>
		</ZakatCardWrapper>
	);
};

export default Nisab;
