import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	filterFormItems,
	ZakatCalculationType,
	zakatLiabilitiesFormItems,
} from '../helper';
import ZakatCardWrapper from './ZakatCardWrapper';

const Liabilities = ({
	advanceMode,
	updateFields,
}: {
	advanceMode: boolean;
	updateFields: (
		type: ZakatCalculationType,
		name: string,
		value: number,
	) => void;
}) => {
	return (
		<ZakatCardWrapper headerTitle="Liabilities">
			<div className="flex flex-col gap-3">
				{filterFormItems(zakatLiabilitiesFormItems, advanceMode).map(
					(item) => (
						<div className="flex flex-col gap-1" key={item.name}>
							<Label className="text-sm font-medium">
								{item.label}
							</Label>
							<Input
								type="number"
								min={0}
								placeholder={item.placeholder}
								name={item.name}
								className="text-right"
								onChange={(e) =>
									updateFields(
										ZakatCalculationType.Liabilities,
										item.name,
										Number(e.target.value),
									)
								}
							/>
						</div>
					),
				)}
			</div>
		</ZakatCardWrapper>
	);
};

export default Liabilities;
