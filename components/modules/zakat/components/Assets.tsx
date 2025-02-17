import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { zakatAssetsFormItems, ZakatCalculationType } from '../helper';
import ZakatCardWrapper from './ZakatCardWrapper';

const Assets = ({
	updateFields,
}: {
	updateFields: (
		type: ZakatCalculationType,
		name: string,
		value: number,
	) => void;
}) => {
	return (
		<ZakatCardWrapper headerTitle="Assets">
			<div className="flex flex-col gap-2">
				{zakatAssetsFormItems.map((item) => (
					<div className="flex flex-col gap-1" key={item.name}>
						<Label className="text-sm font-medium">
							{item.label}
						</Label>
						<Input
							name={item.name}
							className="text-right"
							min={0}
							type="number"
							placeholder={item.placeholder}
							onChange={(e) =>
								updateFields(
									ZakatCalculationType.Assets,
									item.name,
									Number(e.target.value),
								)
							}
						/>
					</div>
				))}
			</div>
		</ZakatCardWrapper>
	);
};

export default Assets;
