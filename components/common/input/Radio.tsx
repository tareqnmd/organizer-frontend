import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useGetOptionsQuery } from '@/store/features/common/options-api';
import { useEffect, useState } from 'react';
const FormRadio = ({ field, input }: any) => {
	const { staticOption, optionUrl = '' } = input;
	const [options, setOptions] = useState([]);

	const { data: dynamicOption } = useGetOptionsQuery(optionUrl, {
		skip: staticOption?.length > 0,
	});

	useEffect(() => {
		setOptions(staticOption?.length > 0 ? staticOption : dynamicOption);
	}, [staticOption, dynamicOption]);

	return (
		<RadioGroup
			onValueChange={field.onChange}
			value={field.value}
			className="flex"
		>
			{options?.map((option: { label: string; value: string }) => (
				<div
					key={option.value}
					className="flex gap-1"
				>
					<RadioGroupItem
						id={option.value}
						value={option.value}
					/>
					<Label
						htmlFor={option.value}
						className="font-normal !m-0"
					>
						{option.label}
					</Label>
				</div>
			))}
		</RadioGroup>
	);
};

export default FormRadio;
