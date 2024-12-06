import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

const CheckboxInput = ({ input, field }: { input: any; field: any }) => {
	return (
		<div className="flex flex-wrap items-center gap-2">
			{input?.staticOptions?.map((option: any, index: number) => (
				<div key={index} className="flex items-center gap-1">
					<Checkbox
						id={index.toString()}
						{...field}
						onCheckedChange={field.onChange}
						checked={field.value === option.value}
					/>
					<Label
						className="cursor-pointer"
						htmlFor={index.toString()}
					>
						{option.label}
					</Label>
				</div>
			))}
		</div>
	);
};

export default CheckboxInput;
