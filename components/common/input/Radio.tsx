import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import {
	CustomFormInputType,
	InputOptionType,
} from '@/lib/helper/shared/types';
import { useGetOptionsQuery } from '@/store/features/common/options-api';
import { useEffect, useState } from 'react';
import { ControllerRenderProps } from 'react-hook-form';

const FormRadio = ({
	field,
	input,
}: {
	field: ControllerRenderProps;
	input: CustomFormInputType;
}) => {
	const { staticOptions = [], optionUrl = '' } = input;
	const [options, setOptions] = useState([]);

	const { data: dynamicOption } = useGetOptionsQuery(optionUrl, {
		skip: staticOptions?.length > 0,
	});

	useEffect(() => {
		setOptions(staticOptions?.length > 0 ? staticOptions : dynamicOption);
	}, [staticOptions, dynamicOption]);

	return (
		<RadioGroup
			onValueChange={field.onChange}
			value={field.value}
			className="flex"
		>
			{options?.map((option: InputOptionType) => (
				<div key={option.value} className="flex gap-1">
					<RadioGroupItem id={option.value} value={option.value} />
					<Label htmlFor={option.value} className="!m-0 font-normal">
						{option.label}
					</Label>
				</div>
			))}
		</RadioGroup>
	);
};

export default FormRadio;
