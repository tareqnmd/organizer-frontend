import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import {
	NISAB_GOLD_IN_GRAMS,
	NISAB_SILVER_IN_GRAMS,
	ZakatCalculationType,
} from '../helper';
import ZakatCardWrapper from './ZakatCardWrapper';
const Nisab = ({
	updateFields,
	advanceMode,
}: {
	updateFields: (
		type: ZakatCalculationType,
		name: string,
		value: number,
	) => void;
	advanceMode: boolean;
}) => {
	const [calculateByGold, setCalculateByGold] = useState(true);
	const calculateAdvanceNisab = (value: number, byGold: boolean) => {
		const numberValue = Number(value);
		if (isNaN(numberValue)) return;
		if (byGold) {
			updateFields(
				ZakatCalculationType.Nisab,
				'nisab',
				numberValue * NISAB_GOLD_IN_GRAMS,
			);
		} else {
			updateFields(
				ZakatCalculationType.Nisab,
				'nisab',
				numberValue * NISAB_SILVER_IN_GRAMS,
			);
		}
	};
	return (
		<ZakatCardWrapper extraClass="max-lg:col-span-full" headerTitle="Nisab">
			{!advanceMode ? (
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
			) : (
				<div className="flex flex-col gap-2">
					<Label className="ml-auto flex w-max cursor-pointer items-center gap-1">
						<Checkbox
							checked={calculateByGold}
							onCheckedChange={() =>
								setCalculateByGold(!calculateByGold)
							}
						/>
						Calculate by Gold
					</Label>
					<div className="flex flex-col gap-2">
						<Label className="text-sm font-medium">
							{calculateByGold ? 'Gold' : 'Silver'}
						</Label>
						<Input
							type="number"
							min={0}
							name="nisab"
							className="text-right"
							placeholder={`${
								calculateByGold ? 'Gold' : 'Silver'
							} price per gram`}
							onChange={(e) =>
								calculateAdvanceNisab(
									Number(e.target.value),
									calculateByGold,
								)
							}
						/>
					</div>
				</div>
			)}
		</ZakatCardWrapper>
	);
};

export default Nisab;
